#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
../merry-christmas-piano/scripts/build-site.sh public/piano
missing="$(find public/piano -name '*.html' -exec grep -L '<meta name="robots" content="noindex' {} +)"
if [ -n "$missing" ]; then
  echo "These pages are missing a noindex tag:" >&2
  echo "$missing" >&2
  exit 1
fi
npm run deploy
