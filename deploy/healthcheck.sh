#!/usr/bin/env bash
set -e
# Simple healthcheck for the app root
URL=${1:-http://127.0.0.1}
if curl -fsS "$URL" >/dev/null; then
  echo "OK: $URL returned success"
  exit 0
else
  echo "FAIL: $URL did not return success"
  exit 2
fi
