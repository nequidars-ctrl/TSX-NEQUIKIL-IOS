#!/bin/bash

set -e

echo "Building iOS bundle and app..."

npm ci

cd ios
pod install
cd ..

echo "Generating JS bundle..."
npx react-native bundle \
  --platform ios \
  --dev false \
  --entry-file index.js \
  --bundle-output ios/main.jsbundle \
  --assets-dest ios/

echo "Bundle generated successfully"

