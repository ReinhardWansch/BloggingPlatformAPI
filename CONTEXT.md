
## aktuelles Issue: Datenbank und Tabelle für Blogposts anlegen

### Ziel
Die Datenbankstruktur für die Blogging-Plattform soll vorbereitet werden.

### Aufgaben
- Datenbank erstellen
- Tabelle posts entwerfen
- Felder für id, title, content, category, tags, created_at und updated_at definieren

### Akzeptanzkriterien
- Die Datenbank lässt sich lokal erstellen
- Die Tabelle posts existiert mit allen benötigten Spalten
- Datentypen sind sinnvoll gewählt

---

## Aufgabe für mich (vor dem nächsten Issue):
- Eine `.env` erzeugen
- Die Umgebungsvariablen aus `.env.example` entfernen und in `.env` eintragen
- Die Fallback-Umgebungsvariablen aus `docker-compose.yml` entfernen
- Ergebnis sollte sein, dass ohne Korrekt gesetzte Umgebungsvariablen in `.env` nichts funktioniert
- Bonus: Die Fälle abfangen, in denen nicht gesetzte U.variablen zu Errors führen