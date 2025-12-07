#!/bin/sh
set -e

cd /app

if [ ! -d "build" ]; then
  echo "Build directory not found, building site..."
  NODE_OPTIONS='--max-old-space-size=2048' npx docusaurus build || {
    echo "Build failed, will retry on next restart"
    exit 1
  }
fi

echo "Starting docusaurus serve..."
exec npx docusaurus serve --host 0.0.0.0 --port 8081 --no-open

