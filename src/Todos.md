# Team Task Board - Todo-Liste

Stand: Aktueller Projektzustand

## Aktuell vorhanden

- [x] Vite/React-Projekt ist erstellt
- [x] Abhängigkeiten sind installiert
- [x] Entwicklungsserver kann mit `npm run dev` gestartet werden
- [x] Tailwind CSS ist eingebunden
- [x] DaisyUI ist eingebunden
- [x] `src/App.css` ist leer
- [x] `src/index.css` importiert Tailwind und DaisyUI
- [x] Komponentenordner sind angelegt
- [x] `Header.jsx` ist erstellt
- [x] `Header` wird in `App.jsx` importiert und gerendert
- [x] `Header` bekommt die Props `total` und `done`
- [x] Grundlayout in `App.jsx` ist vorbereitet

## Aktueller Zustand der Dateien

- [x] `src/App.jsx` rendert den Header und ein vorbereitetes Main-Layout
- [x] `src/components/Header/Header.jsx` enthält Titel, Beschreibung und Statistik-Anzeige
- [ ] `src/components/TaskForm/TaskForm.jsx` ist noch leer
- [ ] `src/components/TaskList/TaskList.jsx` ist noch leer
- [ ] `src/components/TaskItem/TaskItem.jsx` ist noch leer
- [ ] `src/components/FilterBar/FilterBar.jsx` ist noch leer

## Wichtig: Styling-Entscheidung

Das Projekt benutzt aktuell Tailwind CSS und DaisyUI direkt in den `className`-Attributen.
Darum werden im aktuellen Stand keine CSS-Module wie `Header.module.css` oder `TaskForm.module.css` benötigt.

- [x] Styling mit Tailwind/DaisyUI verwenden
- [ ] Komponenten einheitlich mit Tailwind/DaisyUI stylen
- [ ] Nur bei Bedarf später zusätzliche globale Styles in `App.css` oder `index.css` ergänzen

## Nächster sinnvoller Schritt: State in `App.jsx`

- [ ] `useState` aus React importieren
- [ ] `tasks` State anlegen:

  ```js
  const [tasks, setTasks] = useState([]);
  ```

- [ ] `filter` State anlegen:

  ```js
  const [filter, setFilter] = useState("all");
  ```

- [ ] `isLoading` State anlegen:

  ```js
  const [isLoading, setIsLoading] = useState(false);
  ```

- [ ] `error` State anlegen:

  ```js
  const [error, setError] = useState("");
  ```

- [ ] `total` aus `tasks.length` berechnen
- [ ] `done` aus erledigten Tasks berechnen
- [ ] Berechnete Werte an `Header` übergeben

## TaskForm-Komponente

- [ ] Formular mit Feldern erstellen: Titel, Beschreibung, Verantwortliche Person, Status
- [ ] Lokalen Formular-State mit `useState` verwalten
- [ ] `onChange` Handler schreiben
- [ ] `onSubmit` Handler schreiben
- [ ] Validierung: leerer Titel darf nicht abgesendet werden
- [ ] Fehlermeldung bei leerem Titel anzeigen
- [ ] Nach erfolgreichem Submit das Formular leeren
- [ ] `onAdd` als Prop entgegennehmen
- [ ] `addTask` Funktion in `App.jsx` schreiben
- [ ] `TaskForm` in `App.jsx` anzeigen
- [ ] Formular mit Tailwind/DaisyUI stylen

## TaskList und TaskItem

- [ ] `TaskList.jsx` mit Props `tasks`, `onStatusChange`, `onDelete` erstellen
- [ ] Aufgaben mit `map()` rendern
- [ ] Jedes `TaskItem` bekommt `key={task.id}`
- [ ] Wenn keine Aufgaben vorhanden sind, Nachricht anzeigen
- [ ] `TaskItem.jsx` mit Titel, Beschreibung, Verantwortlicher Person und Status erstellen
- [ ] Status-Badge anzeigen
- [ ] Status-Button erstellen: `open -> in-progress -> done -> open`
- [ ] Delete-Button erstellen
- [ ] `changeStatus` Funktion in `App.jsx` schreiben
- [ ] `deleteTask` Funktion in `App.jsx` schreiben
- [ ] `TaskList` in `App.jsx` anzeigen
- [ ] Task-Karten mit Tailwind/DaisyUI stylen

## FilterBar-Komponente

- [ ] Filter-Buttons erstellen: Alle, Offen, In Bearbeitung, Erledigt
- [ ] Aktiven Filter optisch hervorheben
- [ ] `filter` und `setFilter` als Props entgegennehmen
- [ ] Gefilterte Aufgaben in `App.jsx` berechnen
- [ ] Gefilterte Liste an `TaskList` übergeben
- [ ] `FilterBar` in `App.jsx` anzeigen
- [ ] FilterBar mit Tailwind/DaisyUI stylen

## API und useEffect

- [ ] `useEffect` aus React importieren
- [ ] API aufrufen:

  ```txt
  https://jsonplaceholder.typicode.com/todos?_limit=5
  ```

- [ ] Geladene Daten in eigene Task-Struktur umwandeln:

  ```js
  {
    id,
    title,
    description: "Imported demo task",
    assignee: "Demo User",
    status: todo.completed ? "done" : "open"
  }
  ```

- [ ] Vor dem Fetch `isLoading` auf `true` setzen
- [ ] Nach dem Fetch `isLoading` auf `false` setzen
- [ ] Bei Fehler `error` setzen
- [ ] Dependency Array korrekt setzen:

  ```js
  useEffect(() => {
    // fetch tasks
  }, []);
  ```

- [ ] Fallback-Daten vorbereiten, falls API nicht erreichbar ist

## Bedingte Darstellung

- [ ] Loading-Meldung anzeigen, wenn `isLoading === true`
- [ ] Fehlermeldung anzeigen, wenn `error !== ""`
- [ ] Leere-Liste-Nachricht anzeigen, wenn keine Aufgaben vorhanden sind
- [ ] Status-Badge je nach Status unterschiedlich einfärben

## Feinschliff

- [ ] Layout auf Desktop prüfen
- [ ] Layout auf Mobile prüfen
- [ ] Abstände zwischen Komponenten verbessern
- [ ] Buttons einheitlich stylen
- [ ] Status-Farben klar erkennbar machen
- [ ] Unnötige leere JSX-Blöcke in `App.jsx` entfernen:

  ```jsx
  {}
  ```

- [ ] Final prüfen mit:

  ```bash
  npm run build
  ```

## Kann-Anforderungen

- [ ] Aufgaben nach Status zählen und anzeigen
- [ ] Button zum Zurücksetzen auf Demo-Daten
- [ ] Suche nach Titel
- [ ] Aufgaben im `localStorage` speichern
- [ ] Sortierung nach Status
- [ ] Dark/Light Toggle

## Präsentation vorbereiten

- [ ] Welche Komponenten wurden erstellt?
- [ ] Wo werden Props genutzt?
- [ ] Wo wird State genutzt?
- [ ] Welche Events verarbeitet die App?
- [ ] Wo wird `useEffect` genutzt?
- [ ] Welche Fehler gab es und wie wurden sie gelöst?
- [ ] Was kann später verbessert werden?
