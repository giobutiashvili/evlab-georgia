#!/usr/bin/env bash
set -e
# Usage: ./rollback.sh /var/www/realway

DEPLOY_PATH=${1:-/var/www/realway}
RELEASES_DIR=$DEPLOY_PATH/releases

if [ ! -d "$RELEASES_DIR" ]; then
  echo "No releases directory found at $RELEASES_DIR"
  exit 1
fi

cd "$RELEASES_DIR"
CURRENT=$(readlink -f "$DEPLOY_PATH/current" 2>/dev/null || true)
echo "Current symlink points to: $CURRENT"

PREV=$(ls -1dt */ | sed -n '2p' | sed 's:/*$::')
if [ -z "$PREV" ]; then
  echo "No previous release to roll back to"
  exit 1
fi

echo "Switching current to previous release: $PREV"
ln -sfn "$RELEASES_DIR/$PREV" "$DEPLOY_PATH/current"
echo "Switched. You may need to restart php-fpm/nginx depending on your setup."
