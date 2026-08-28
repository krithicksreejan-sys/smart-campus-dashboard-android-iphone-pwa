#!/usr/bin/env bash
cd "$(dirname "$0")"
echo "Smart Campus is starting at http://localhost:5500"
python3 -m http.server 5500 --bind 0.0.0.0
