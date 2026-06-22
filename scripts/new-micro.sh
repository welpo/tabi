#!/usr/bin/env bash
# Quick micro post generator - eliminates title/date friction

set -euo pipefail

# Get current timestamp
NOW=$(date +"%Y-%m-%dT%H:%M:%S%:z")
FILENAME=$(date +"%Y-%m-%d-%H%M")
TITLE=$(date +"%Y-%m-%d %H:%M")

# Get content from stdin or prompt
if [ -t 0 ]; then
    echo "Enter micro post content (Ctrl+D when done):"
    CONTENT=$(cat)
else
    CONTENT=$(cat)
fi

# Create post
cat > "content/micro/${FILENAME}.md" <<EOF
+++
title = "${TITLE}"
date = ${NOW}
+++

${CONTENT}
EOF

echo "Created: content/micro/${FILENAME}.md"