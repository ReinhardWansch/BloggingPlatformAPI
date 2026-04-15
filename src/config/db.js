/*
In db.js steht normalerweise die Datenbank-Konfiguration und der Verbindungsaufbau zu MySQL.

Kurz gesagt enthält die Datei meist:

1. Einlesen der DB-Umgebungsvariablen  
Host, Port, Benutzer, Passwort, Datenbankname aus process.env.

2. Erstellen einer Verbindung oder eines Connection-Pools  
Ein Pool ist eine Sammlung wiederverwendbarer Verbindungen und ist für APIs fast immer besser als eine Einzelverbindung.

3. Export der DB-Instanz  
Damit Repository-Dateien diese Instanz für SQL-Queries nutzen können.

4. Optional: kleiner Verbindungscheck beim Start  
Zum Beispiel ein Test-Query, damit du früh merkst, ob die DB erreichbar ist.

Merksatz: db.js ist die zentrale Stelle, die deine App mit MySQL verbindet und diese Verbindung für den Rest des Backends bereitstellt.
*/