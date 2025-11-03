const { spawn } = require('child_process');
const http = require('http');

async function testEndpoint(url, expectedStatus = 200) {
  return new Promise((resolve) => {
    const req = http.get(url, (res) => {
      console.log(`✅ ${url} - Status: ${res.statusCode}`);
      resolve(res.statusCode === expectedStatus);
    });
    
    req.on('error', (err) => {
      console.log(`❌ ${url} - Error: ${err.message}`);
      resolve(false);
    });
    
    req.setTimeout(5000, () => {
      console.log(`⏰ ${url} - Timeout`);
      req.destroy();
      resolve(false);
    });
  });
}

async function waitForServer(retries = 10) {
  for (let i = 0; i < retries; i++) {
    try {
      const success = await testEndpoint('http://localhost:3000');
      if (success) return true;
    } catch (e) {
      // ignore
    }
    console.log(`Waiting for server... (${i + 1}/${retries})`);
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  return false;
}

async function runTests() {
  console.log('🚀 Starting server test...');
  
  // Start the dev server
  const server = spawn('npm', ['run', 'dev'], {
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  });

  let serverReady = false;
  
  server.stdout.on('data', (data) => {
    const output = data.toString();
    if (output.includes('Ready in')) {
      serverReady = true;
      console.log('✅ Server is ready!');
    }
  });

  server.stderr.on('data', (data) => {
    console.log('Server output:', data.toString());
  });

  // Wait for server to be ready
  await new Promise(resolve => {
    const checkReady = () => {
      if (serverReady) {
        resolve();
      } else {
        setTimeout(checkReady, 1000);
      }
    };
    checkReady();
  });

  // Wait a bit more for server to fully initialize
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Test endpoints
  console.log('\n🧪 Testing endpoints...');
  
  const tests = [
    { url: 'http://localhost:3000', name: 'Home page' },
    { url: 'http://localhost:3000/admin', name: 'Admin panel' },
    { url: 'http://localhost:3000/artists/music', name: 'Music artists page' },
  ];

  const results = [];
  for (const test of tests) {
    console.log(`Testing ${test.name}...`);
    const success = await testEndpoint(test.url);
    results.push({ ...test, success });
  }

  // Summary
  console.log('\n📊 Test Results:');
  const passed = results.filter(r => r.success).length;
  const total = results.length;
  
  results.forEach(result => {
    console.log(`${result.success ? '✅' : '❌'} ${result.name}`);
  });
  
  console.log(`\n${passed}/${total} tests passed`);
  
  if (passed === total) {
    console.log('🎉 All tests passed! The app is running successfully.');
  } else {
    console.log('⚠️  Some tests failed, but the server is running.');
  }

  // Clean up
  server.kill('SIGTERM');
  process.exit(passed === total ? 0 : 1);
}

runTests().catch(console.error);