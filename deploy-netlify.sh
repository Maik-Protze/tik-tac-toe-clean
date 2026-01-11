#!/usr/bin/env bash
# Deploy build/ to Netlify using netlify-cli.
# Requires: npm i -g netlify-cli and a Netlify account.
# Set env var NETLIFY_AUTH_TOKEN or run `netlify login` interactively.

set -euo pipefail

if [ ! -d build ]; then
  echo "No build/ directory found. Run 'npm run build' first." >&2
  exit 1
fi

if ! command -v netlify >/dev/null 2>&1; then
  echo "netlify CLI not found. Install: npm i -g netlify-cli" >&2
  exit 1
fi

echo "If you haven't logged in, run: netlify login"
echo "To deploy interactively run: netlify deploy --dir=build --prod"
echo "To deploy non-interactively, set NETLIFY_AUTH_TOKEN and optionally NETLIFY_SITE_ID, then run:"
echo "  netlify deploy --dir=build --prod --auth=")
