Erste Schritte mit Create React App

Dieses Projekt wurde mit Create React App erstellt.

Verfügbare Skripte
Im Projektverzeichnis kannst du folgende Befehle ausführen:

npm start

Startet die App im Entwicklungsmodus.
Öffne http://localhost:3000, um sie im Browser anzusehen.

Die Seite lädt neu, wenn du Änderungen vornimmst.
Lint‑Fehler werden ebenfalls in der Konsole angezeigt.

npm test

Startet den Test‑Runner im interaktiven Watch‑Modus.
Weitere Informationen findest du im Abschnitt über Tests ausführen.

npm run build

Erstellt ein Produktions‑Build im Ordner build.
Dabei wird React korrekt für den Produktionsmodus gebündelt und das Build für beste Performance optimiert.

Das Build wird minimiert und die Dateinamen enthalten Hashes.
Deine App ist bereit für die Bereitstellung!

Weitere Informationen zur Bereitstellung findest du in der Dokumentation: deployment.

npm run eject

Hinweis: Das ist ein einmaliger Vorgang. Sobald du eject ausführst, kannst du nicht zurück!

Wenn du mit den Build‑Tools und Konfigurationsentscheidungen nicht zufrieden bist, kannst du jederzeit eject ausführen. Dieser Befehl entfernt die zentrale Build‑Abhängigkeit aus deinem Projekt.

Stattdessen werden alle Konfigurationsdateien und transitiven Abhängigkeiten (Webpack, Babel, ESLint usw.) in dein Projekt kopiert, sodass du volle Kontrolle bekommst. Alle Befehle außer eject funktionieren weiterhin, verweisen dann aber auf die kopierten Skripte, sodass du sie anpassen kannst. Ab diesem Zeitpunkt bist du auf dich allein gestellt.

Du musst eject nicht ausführen. Das vorkonfigurierte Setup eignet sich für kleine bis mittlere Projekte und du solltest dich nicht verpflichtet fühlen, es zu nutzen. Wir verstehen jedoch, dass dieses Tool nutzlos wäre, wenn du nicht anpassen könntest, wenn du bereit dafür bist.

Mehr erfahren
Mehr Informationen findest du in der Create React App Dokumentation.

Um React zu lernen, sieh dir die React‑Dokumentation an.

Möchtest du, dass ich diese Übersetzung direkt in die Datei README.md schreibe?

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

## Development / Run Instructions

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

Weitere Informationen: siehe `DEVELOPMENT.md` im Repository‑Root.
