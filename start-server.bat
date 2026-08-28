@echo off
cd /d "%~dp0"
echo Smart Campus is starting at http://localhost:5500
python -m http.server 5500 --bind 0.0.0.0
pause
