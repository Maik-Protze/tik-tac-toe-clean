#!/usr/bin/env bash
# Deploy build/ to `gh-pages` branch on a remote repo.
# Usage: 1) Add a git remote (origin) that points to your GitHub repo.
#        2) Run this script from the project root: `./deploy-github-pages.sh`
# Notes: this will force-push to the remote `gh-pages` branch. You need permission to push.

set -euo pipefail

if ! command -v git >/dev/null 2>&1; then
  echo "git is required but not installed. Install git and retry." >&2
  exit 1
fi

REMOTE=${1:-origin}

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "This directory is not a git repo. Initialize one and add a remote, or pass a repo remote URL." >&2
  echo "Example: git init; git remote add origin git@github.com:USERNAME/REPO.git" >&2
  exit 1
fi

if ! git ls-remote --exit-code $REMOTE >/dev/null 2>&1; then
  echo "Remote '$REMOTE' not found or unreachable. Add a remote named '$REMOTE' that points to your GitHub repo." >&2
  exit 1
fi

if [ ! -d build ]; then
  echo "No build/ directory found. Run 'npm run build' first." >&2
  exit 1
fi

echo "Deploying build/ to branch gh-pages on remote '$REMOTE'..."

# Create an orphan branch, commit the build contents and push to remote gh-pages
git checkout --orphan gh-pages
git --work-tree build add --all
git --work-tree build commit -m "Deploy: $(date -u +%Y-%m-%dT%H:%M:%SZ)" || true
git push $REMOTE HEAD:gh-pages --force

# Return to previous branch
git checkout -

echo "Deployment complete. GitHub Pages should serve the site at https://<USERNAME>.github.io/<REPO>/ (depending on repo settings)."
