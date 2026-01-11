@echo off
REM Tic-Tac-Toe — Start helper for Windows
REM Tries to start a local Python HTTP server and opens the browser.
REM If Python is not available, falls back to opening the index.html directly.

cd /d "%~dp0"

where py >nul 2>&1
if %errorlevel%==0 (
  start "TicTacToe Server" py -3 -m http.server 3000
  timeout /t 1 >nul
  start "" "http://localhost:3000"
  exit /b
)

where python >nul 2>&1
if %errorlevel%==0 (
  start "TicTacToe Server" python -m http.server 3000
  timeout /t 1 >nul
  start "" "http://localhost:3000"
  exit /b
)

REM Fallback: open index.html directly (may fail for some asset paths)
start "" "%~dp0build\index.html"
exit /b
