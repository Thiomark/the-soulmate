#!/bin/bash

# Vercel Build Test Script
# This simulates how Vercel builds your project

echo "🔍 Testing build exactly as Vercel will build it..."
echo ""

# Clean any existing build
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf .vercel

echo ""
echo "📦 Installing dependencies (as Vercel does)..."
npm ci

echo ""
echo "🏗️  Building with Next.js (as Vercel does)..."
npm run build

echo ""
echo "🔍 Checking for TypeScript errors..."
npx tsc --noEmit

echo ""
echo "✅ Build test completed!"
echo ""
echo "If this passes, your Vercel deployment should work correctly."
echo "If it fails, fix the issues here before pushing to save deployment time."