const http = require('http');

function testAdminPanel() {
  return new Promise((resolve, reject) => {
    console.log('🚀 Testing admin panel...');
    
    const req = http.get('http://localhost:3000/admin', (res) => {
      console.log(`📊 Status Code: ${res.statusCode}`);
      console.log(`📋 Headers:`, res.headers);
      
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        // Check for basic HTML structure
        const htmlCount = (data.match(/<html/g) || []).length;
        const bodyCount = (data.match(/<body/g) || []).length;
        
        console.log(`🏗️  HTML tags found: ${htmlCount}`);
        console.log(`🏗️  BODY tags found: ${bodyCount}`);
        
        // Check if it's a redirect (which is normal for Payload)
        const isRedirect = res.statusCode >= 300 && res.statusCode < 400;
        const isSuccess = res.statusCode === 200;
        
        console.log(`🔄 Is redirect: ${isRedirect}`);
        console.log(`✅ Is success: ${isSuccess}`);
        
        // For redirects, we expect minimal HTML
        // For success, we expect proper structure
        const structureOk = isRedirect || (htmlCount === 1 && bodyCount === 1);
        
        console.log(`🎯 Structure OK: ${structureOk}`);
        console.log(`📄 Response length: ${data.length} characters`);
        
        if (data.length > 0 && data.length < 1000) {
          console.log('📄 Response preview:', data.substring(0, 500));
        }
        
        const success = (isRedirect || isSuccess) && structureOk;
        console.log(`\n🎉 Overall result: ${success ? 'PASS ✅' : 'FAIL ❌'}`);
        
        resolve(success);
      });
    });
    
    req.on('error', (err) => {
      console.error('❌ Request failed:', err.message);
      reject(err);
    });
    
    req.setTimeout(10000, () => {
      console.error('⏰ Request timeout');
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

// Start the server and test
const { spawn } = require('child_process');

console.log('🚀 Starting Next.js dev server...');
const server = spawn('npm', ['run', 'dev'], {
  stdio: ['ignore', 'pipe', 'pipe']
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
  const output = data.toString();
  if (output.includes('Ready in')) {
    serverReady = true;
    console.log('✅ Server is ready!');
  }
});

// Wait for server to start, then test
setTimeout(async () => {
  if (!serverReady) {
    console.log('⏰ Server not ready yet, but testing anyway...');
  }
  
  try {
    const success = await testAdminPanel();
    server.kill('SIGTERM');
    process.exit(success ? 0 : 1);
  } catch (error) {
    console.error('💥 Test failed:', error.message);
    server.kill('SIGTERM');
    process.exit(1);
  }
}, 8000);