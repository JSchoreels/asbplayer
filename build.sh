#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

NODE_MAJOR="$(node -p "process.versions.node.split('.')[0]")"
if [ "${NODE_MAJOR}" != "22" ]; then
    echo "Node.js 22.x is required (current: $(node -v))." >&2
    echo "Example: nvm use 22.17.1" >&2
    exit 1
fi

yarn workspace @project/extension run build

echo "Build complete: /Users/jschoreels/workspace/asbplayer/extension/.output/chrome-mv3"
