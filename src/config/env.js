/*
In env.js steht normalerweise die zentrale Umgebungs-Konfiguration deiner App.

Kurz enthält die Datei meist:

1. Laden der Umgebungsvariablen  
Zum Beispiel über dotenv, damit Werte aus .env in process.env verfügbar sind.

2. Validieren der Pflichtwerte  
Prüfen, ob wichtige Variablen wie DB_HOST, DB_USER oder PORT gesetzt sind. Falls etwas fehlt, wird die App früh mit klarer Fehlermeldung beendet.

3. Normalisieren von Datentypen  
Beispiel: PORT von String zu Zahl umwandeln.

4. Export eines config-Objekts  
Andere Dateien importieren dann nur dieses Objekt statt überall direkt process.env zu lesen.

Kurz gesagt: env.js ist die eine, saubere Quelle für Konfigurationswerte in deinem Backend.
*/