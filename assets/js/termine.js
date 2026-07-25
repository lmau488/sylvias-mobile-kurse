/* =====================================================================
   TERMINE  –  HIER trägst du die Kurstermine ein
   =====================================================================

   So einfach geht's – KEIN HTML nötig:

   • Ein Termin = EINE Zeile zwischen den beiden `Backtick`-Zeichen.
   • Die Felder werden mit einem senkrechten Strich  |  getrennt.
     (Auf der Tastatur:  AltGr + die Taste  <  , unten links.)

   Reihenfolge der Felder (immer gleich, immer alle 7):
     Tag | Monat | Titel | Uhrzeit | Ort | Plätze | Status

   Beispiel:
     26 | Sep | Brotback-Seminar | 10:00–14:00 Uhr | Seminarküche Wolnzach | max. 8 Personen | frei

   Hinweise zu den Feldern:
     • Monat  = 3 Buchstaben:  Jan Feb Mär Apr Mai Jun Jul Aug Sep Okt Nov Dez
     • Status = genau eines von:   frei   wenige   voll
                (frei = grün "Plätze frei", wenige = orange
                 "Nur noch wenige Plätze", voll = "Ausgebucht")

   Was du tun kannst:
     • Termin ÄNDERN  → einfach die Zeile umschreiben.
     • Termin HINZUFÜGEN → eine neue Zeile darunter schreiben.
     • Termin LÖSCHEN → die ganze Zeile löschen.
     • Reihenfolge = Anzeige-Reihenfolge (oberste Zeile erscheint oben).
     • Eine Zeile, die mit  #  beginnt, wird ignoriert (praktisch für Notizen
       oder um einen Termin kurz "auszuschalten", ohne ihn zu löschen).

   BITTE NICHT ANFASSEN:
     • Die Zeile   window.TERMINE = `   (ganz oben, mit dem Backtick)
     • Das einzelne   `   ganz unten
     • Kein Backtick-Zeichen ` in einen Titel schreiben.
   ===================================================================== */

// Zurzeit sind hier KEINE Termine eingetragen – die Website zeigt dann nur
// den Hinweis auf das Kursprogramm-PDF. Sobald unten (zwischen den beiden
// Backticks) echte Termin-Zeilen stehen, erscheinen sie automatisch wieder
// als Kacheln auf der Website.
window.TERMINE = `
# So sieht eine Termin-Zeile aus – zum Aktivieren das # am Anfang weglassen:
# 26 | Sep | Brotback-Seminar | 10:00–14:00 Uhr | Seminarküche Wolnzach | max. 8 Personen | frei
`;
