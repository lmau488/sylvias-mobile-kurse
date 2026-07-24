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

// Die 3 Zeilen unten sind nur BEISPIELE (im Titel steht "(Beispiel)").
// Ersetze sie durch echte Termine und entferne dabei das "(Beispiel)".
window.TERMINE = `
26 | Sep | Brotback-Seminar (Beispiel) | 10:00–14:00 Uhr | Seminarküche Wolnzach | max. 8 Personen | frei
17 | Okt | Kochevent: Herbstküche (Beispiel) | 17:00–20:00 Uhr | Seminarküche Wolnzach | max. 8 Personen | wenige
07 | Nov | Kinderkurs: Plätzchenbäckerei (Beispiel) | 14:00–16:30 Uhr | Seminarküche Wolnzach | max. 8 Kinder | frei
`;
