Anleitung: Spiel unter Windows 11 starten

Dateien in diesem Archiv:
- Ordner `build` (statische Produktionsdateien)
- Diese Datei `README-windows.txt`

Option 1 — Schnell (nur entpacken):
1. ZIP entpacken.
2. Doppelklick auf `build\\index.html` (öffnet im Standardbrowser).
Hinweis: Bei manchen Builds funktionieren lokale Dateipfade (`file://`) nicht richtig — dann Option 2 oder 3 nutzen.

Option 2 — Empfohlen (Node, robust):
1. Node.js installieren: https://nodejs.org
2. PowerShell öffnen und ins entpackte Projektverzeichnis wechseln.
3. Ohne globalen Install: `npx serve -s build -l 3000`
   Oder (einmalig global): `npm install -g serve` und dann `serve -s build -l 3000`
4. Im Browser öffnen: `http://localhost:3000`

Option 3 — Einfach (kein Node, Python):
1. Python 3 installieren falls nötig: https://www.python.org
2. In PowerShell ins `build`-Verzeichnis wechseln:
   `cd path\\to\\build`
3. HTTP-Server starten:
   `py -3 -m http.server 3000`
4. Im Browser öffnen: `http://localhost:3000`

Wichtige Hinweise:
- Windows Firewall kann beim Starten eines lokalen Servers um Erlaubnis fragen — zulassen.
- Falls Port 3000 bereits belegt ist, eine andere Portnummer wählen (z. B. 8000).
- Wenn du den Quellcode (nicht nur `build`) verschickst, kann der Empfänger auch `npm install` und `npm start` ausführen.

Support:
Wenn du möchtest, erstelle ich für dich noch eine ZIP-Datei mit dem `build`-Ordner (fertig zum Verschicken). Ich habe das jetzt bereits gemacht und die ZIP liegt im Projektordner.
Hinweis zur Windows‑Startdatei:
- In diesem Paket befindet sich `start-game.bat`. Empfänger können per Doppelklick das Spiel starten. Die Batchdatei versucht zuerst, Python 3 zu verwenden und startet dann einen lokalen HTTP‑Server auf Port 3000; falls Python nicht vorhanden ist, öffnet die Batch `build\\index.html` direkt als Fallback.
- Sicherheit: Manche E‑Mail‑Clients oder Antivirenprogramme warnen bei Batch‑Dateien. Informiere den Empfänger kurz, dass die Datei nur einen einfachen HTTP‑Server startet oder die HTML direkt öffnet.

Viel Spaß beim Spielen!
