Instructions: Run the game on Windows 11

Included in this package:
- `build` folder (static production files)
- this `README-windows-en.txt`

Option 1 — Quick (no server):
1. Unzip the archive.
2. Double-click `build\\index.html` to open it in the default browser.
Note: Some builds may fail to load assets when opened via `file://`. If that happens, use Option 2 or 3.

Option 2 — Recommended (Node.js static server):
1. Install Node.js: https://nodejs.org
2. Open PowerShell and change to the project folder.
3. Run (no global install required):
   `npx serve -s build -l 3000`
   Or install `serve` once globally:
   `npm install -g serve` then `serve -s build -l 3000`
4. Open `http://localhost:3000` in your browser.

Option 3 — Simple (Python HTTP server):
1. Install Python 3 if needed: https://www.python.org
2. In PowerShell, change into the `build` directory:
   `cd path\\to\\build`
3. Start the server:
   `py -3 -m http.server 3000`
4. Open `http://localhost:3000` in your browser.

Notes:
- Windows Firewall may ask permission when starting a local server — allow it.
- If port 3000 is in use, pick another port (e.g. 8000).
- If you share the source (not only `build`), the recipient can run `npm install` and `npm start`.

Enjoy the game!
