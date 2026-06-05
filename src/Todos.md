# Team Task Board – Todo-Liste

## Phase 1: Projekt-Setup (20 min)

- [ ] Node.js ist installiert (✅ bereits erledigt)
- [ ] Vite-Projekt erstellen: `npm create vite@latest team-task-board -- --template react`
- [ ] In den Projektordner wechseln: `cd team-task-board`
- [ ] Abhängigkeiten installieren: `npm install`
- [ ] Entwicklungsserver starten: `npm run dev`
- [ ] Browser öffnen → `http://localhost:5173/` funktioniert

---

## Phase 2: Boilerplate bereinigen (10 min)

- [ ] `src/App.jsx` – Inhalt durch einfaches `<h1>Team Task Board</h1>` ersetzen
- [ ] `src/App.css` – Inhalt komplett löschen (Datei behalten)
- [ ] `src/index.css` – Inhalt leeren oder für globale Styles behalten
- [ ] `src/assets/` – Ordner löschen

---

## Phase 3: Ordnerstruktur anlegen (10 min)

- [ ] `src/components/Header/Header.jsx` erstellen
- [ ] `src/components/Header/Header.module.css` erstellen
- [ ] `src/components/TaskForm/TaskForm.jsx` erstellen
- [ ] `src/components/TaskForm/TaskForm.module.css` erstellen
- [ ] `src/components/TaskList/TaskList.jsx` erstellen
- [ ] `src/components/TaskList/TaskList.module.css` erstellen
- [ ] `src/components/TaskItem/TaskItem.jsx` erstellen
- [ ] `src/components/TaskItem/TaskItem.module.css` erstellen
- [ ] `src/components/FilterBar/FilterBar.jsx` erstellen
- [ ] `src/components/FilterBar/FilterBar.module.css` erstellen

---

## Phase 4: Header-Komponente (15 min)

- [ ] `Header.jsx` schreiben – Titel, Beschreibung, Aufgaben-Anzahl, Erledigt-Anzahl
- [ ] Props `total` und `done` von `App.jsx` entgegennehmen
- [ ] `Header.module.css` stylen
- [ ] Header in `App.jsx` importieren und einbinden
- [ ] Props aus App-State an Header übergeben

---

## Phase 5: State in App.jsx (15 min)

- [ ] `useState` für `tasks` anlegen: `const [tasks, setTasks] = useState([])`
- [ ] `useState` für `filter` anlegen: `const [filter, setFilter] = useState("all")`
- [ ] `useState` für `isLoading` anlegen: `const [isLoading, setIsLoading] = useState(false)`
- [ ] `useState` für `error` anlegen: `const [error, setError] = useState("")`
- [ ] `react` importieren: `import { useState } from "react"`

---

## Phase 6: TaskForm-Komponente (30 min)

- [ ] Formular mit 4 Feldern: Titel, Beschreibung, Verantwortliche Person, Status
- [ ] Lokalen Formular-State mit `useState` verwalten
- [ ] `onChange` Handler für jedes Feld schreiben
- [ ] `onSubmit` Handler schreiben
- [ ] Validierung: leerer Titel → Fehlermeldung, kein Absenden
- [ ] Nach Submit: Formular leeren
- [ ] Funktion `onAdd` als Prop von `App.jsx` entgegennehmen
- [ ] `addTask`-Funktion in `App.jsx` schreiben und per Props weitergeben
- [ ] `TaskForm.module.css` stylen

---

## Phase 7: TaskList & TaskItem (30 min)

- [ ] `TaskList.jsx` – Liste mit `map()` rendern
- [ ] Jedes `<TaskItem>` bekommt `key={task.id}`
- [ ] Wenn keine Aufgaben: Nachricht "Keine Aufgaben vorhanden." anzeigen
- [ ] `TaskItem.jsx` – Titel, Beschreibung, Verantwortliche Person, Status anzeigen
- [ ] Status-Button: `open → in-progress → done → open`
- [ ] Löschen-Button: Aufgabe entfernen
- [ ] `changeStatus`-Funktion in `App.jsx` schreiben
- [ ] `deleteTask`-Funktion in `App.jsx` schreiben
- [ ] Beide Funktionen per Props an `TaskItem` weitergeben
- [ ] `TaskList.module.css` und `TaskItem.module.css` stylen

---

## Phase 8: FilterBar-Komponente (20 min)

- [ ] 4 Filter-Buttons: Alle, Offen, In Bearbeitung, Erledigt
- [ ] Aktiver Filter optisch hervorheben (z.B. andere Farbe)
- [ ] `filter` State und `setFilter` Funktion als Props entgegennehmen
- [ ] Gefilterte Aufgaben in `App.jsx` berechnen: `tasks.filter(...)`
- [ ] Gefilterte Liste an `TaskList` übergeben
- [ ] `FilterBar.module.css` stylen

---

## Phase 9: useEffect & API-Aufruf (25 min)

- [ ] `useEffect` und `useState` aus React importieren
- [ ] API aufrufen: `https://jsonplaceholder.typicode.com/todos?_limit=5`
- [ ] Geladene Daten in eigene Task-Struktur umwandeln:
  ```js
  { id, title, description: "Imported demo task", assignee: "Demo User", status: todo.completed ? "done" : "open" }
  ```
- [ ] `isLoading` auf `true` setzen vor dem Fetch, danach auf `false`
- [ ] Bei Fehler: `error` State setzen
- [ ] Dependency Array korrekt setzen: `useEffect(() => { ... }, [])`
- [ ] Fallback-Daten vorbereiten für den Fall dass API fehlschlägt

---

## Phase 10: Bedingte Darstellung (15 min)

- [ ] Loading-Meldung anzeigen wenn `isLoading === true`
- [ ] Fehlermeldung anzeigen wenn `error !== ""`
- [ ] Leere-Liste-Nachricht anzeigen wenn keine Aufgaben vorhanden
- [ ] Status-Badge je nach Status unterschiedlich einfärben (open/in-progress/done)

---

## Phase 11: Styling & Feinschliff (40 min)

- [ ] Kartenlayout für Aufgaben
- [ ] Status-Farben klar erkennbar (z.B. grün = done, gelb = in-progress, grau = open)
- [ ] Abstände zwischen Komponenten
- [ ] Aktiver Filter visuell hervorheben
- [ ] Kein reines Inline-Styling – CSS Modules oder normale CSS-Dateien nutzen
- [ ] App auf verschiedenen Bildschirmbreiten testen

---

## Kann-Anforderungen (nur wenn Zeit bleibt)

- [ ] Aufgaben nach Status zählen und anzeigen
- [ ] Button zum Zurücksetzen auf Demo-Daten
- [ ] Suche nach Titel
- [ ] Aufgaben im `localStorage` speichern
- [ ] Sortierung nach Status
- [ ] Dark/Light Toggle

---

## Präsentation vorbereiten (10 min)

- [ ] Welche Komponenten habt ihr erstellt?
- [ ] Wo nutzt ihr Props?
- [ ] Wo nutzt ihr State?
- [ ] Welche Events verarbeitet eure App?
- [ ] Wo wird `useEffect` genutzt?
- [ ] Welche Fehler hattet ihr und wie habt ihr sie gelöst?
- [ ] Was würdet ihr verbessern, wenn ihr mehr Zeit hättet?
