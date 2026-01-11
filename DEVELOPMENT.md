DEVELOPMENT — How to run this project (Deutsch)

Kurz: Dieses Projekt wurde mit Create React App erstellt.

1) Abhängigkeiten installieren

Öffne ein Terminal im Projekt‑Ordner (`tik-tac-toe-react`) und führe aus:

```bash
npm install
```

2) Entwicklungsserver starten

```bash
npm start
```

Danach im Browser: http://localhost:3000 (Standard)

3) Produktions‑Build erzeugen

```bash
npm run build
```

Das erzeugt den Ordner `build/`, der die statischen Dateien enthält.

4) Lokales Testen des Builds

- Mit Python (kein Node benötigt):

```bash
cd build
py -3 -m http.server 3000
# dann http://localhost:3000 öffnen
```

- Mit Node (empfohlen, robust):

```bash
npx serve -s build -l 3000
# oder: npm install -g serve
# und dann: serve -s build -l 3000
```

5) Deployment auf GitHub Pages (bereits eingerichtet)

Ich habe ein Script `deploy-github-pages.sh`, das den Inhalt von `build/` in die `gh-pages` Branch pusht.

Verwendung (lokal):

```bash
./deploy-github-pages.sh origin
```

Hinweis: Das Script macht ein Force‑Push auf `gh-pages`. Stelle sicher, dass du das willst.

6) ZIP / Windows‑Start

Die ZIP `TicTacToe-Windows.zip` auf deinem Desktop enthält `build/` plus Hilfsdateien und `start-game.bat`.
Empfänger können per Doppelklick `start-game.bat` ausführen; falls Python vorhanden ist, startet das einen lokalen Server und öffnet den Browser.

7) Weiteres

Wenn du möchtest, kann ich README.md direkt erweitern, zusätzliche Hinweise ergänzen oder ein automatisches GitHub Action für Deploys anlegen.
