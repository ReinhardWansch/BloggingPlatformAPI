
## aktuelles Issue: API-Struktur mit Routen und Controller-Logik vorbereiten

### Ziel
Die REST-API soll eine klare und wartbare Struktur erhalten.

### Aufgaben
- Posts-Routen anlegen
- Controller-Datei vorbereiten
- Saubere Trennung zwischen Routing, Logik und Datenbankzugriff herstellen

### Akzeptanzkriterien
- Die Routenstruktur ist nachvollziehbar
- Die Posts-Endpunkte sind zentral organisiert
- Die Anwendung ist leicht erweiterbar

---

## Umsetzungsschritte

**Schritt 1 – Repository-Schicht implementieren** (`posts.repository.js`)  
Alle direkten SQL-Abfragen gegen MySQL schreiben: `findAll`, `findById`, `create`, `update`, `delete`, sowie die Suche mit `term` (Wildcard-Suche auf `title`, `content`, `category`).

**Schritt 2 – Service-Schicht implementieren** (`posts.service.js`)  
Fachlogik kapseln: Repository-Funktionen aufrufen, Geschäftsregeln anwenden (z. B. „Post existiert überhaupt?"), und für den Controller aufbereitete Ergebnisse liefern.

**Schritt 3 – Controller implementieren** (`posts.controller.js`)  
Request entgegennehmen, den Service aufrufen und die HTTP-Response mit korrektem Statuscode zurückgeben (`200`, `201`, `204`, `404`, `400`).

**Schritt 4 – Routen definieren** (`posts.routes.js`)  
Express-Router anlegen und alle 5 Endpunkte (`GET /posts`, `GET /posts/:id`, `POST /posts`, `PUT /posts/:id`, `DELETE /posts/:id`) mit dem passenden Controller verbinden.

**Schritt 5 – Router in app.js einbinden** (`src/app.js`)  
Den Posts-Router unter dem Präfix `/posts` registrieren, damit die Endpunkte erreichbar sind.

**Schritt 6 – Fehlerbehandlung verdrahten** (`src/middleware/errorHandler.js`)  
Prüfen ob der zentrale Error-Handler und der 404-Handler bereits in `app.js` eingehängt sind, und sie ggf. als letztes Middleware registrieren.

