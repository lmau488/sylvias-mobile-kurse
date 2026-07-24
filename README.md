# SylviasGusto – Website

Statische Website (reines HTML/CSS/JS – kein Server, keine Datenbank, keine
Plugins) für **SylviasGusto: mobile Koch- & Backkurse** in Wolnzach (Hallertau).

Live: **https://lmau488.github.io/sylvias-mobile-kurse/**

---

## Inhalte ändern – Kurzfassung

1. Datei (meist `index.html`) hier auf GitHub anklicken.
2. Oben rechts auf das **Stift-Symbol** („Edit this file") klicken.
3. Ändern, dann auf den grünen Knopf **Commit changes** klicken.
4. Nach 1–2 Minuten ist die Änderung automatisch online
   (Fortschritt im Tab **Actions**).

In `index.html` sind alle wichtigen Stellen mit Kommentar-Kästen markiert.
Mit **Strg+F** nach diesen Stichwörtern suchen:

| Suchwort | Was sich dort ändern lässt |
|---|---|
| **Termine** | stehen in einer eigenen, einfachen Datei: **`assets/js/termine.js`** – pro Termin eine Zeile, ganz ohne HTML |
| `ÄNDERN: PREISE` | Preise anpassen (stehen an 3 Stellen) |
| `ÄNDERN: ANGEBOTE` | Kurs-Karten: Texte, Dauer, Preise |
| `ÄNDERN: TELEFON` | Telefonnummer freischalten (2 Stellen) |
| `ÄNDERN: KUNDENSTIMMEN` | Echte Zitate eintragen und Sektion einblenden |
| `ÄNDERN: FAQ` | Fragen ergänzen oder anpassen |

Die ausführliche Schritt-für-Schritt-Anleitung (mit Checkliste und
„Rückgängig machen") liegt als `Anleitung-Website-aendern.html` im lokalen
Website-Ordner auf dem PC.

## Nach jeder Änderung kurz prüfen

- Tab **Actions**: ist der letzte Lauf grün?
- Live-Seite öffnen, mit **Strg+F5** neu laden, geänderte Stelle anschauen.
- Browserfenster einmal schmal ziehen: sieht die Handy-Ansicht gut aus?

Etwas kaputtgegangen? Nichts ist verloren: Datei anklicken → **History** →
alte Version öffnen und den Inhalt zurückkopieren (Details in der Anleitung).

---

## Was ist was?

```
index.html          Startseite (alle Inhalte)
impressum.html      Impressum
datenschutz.html    Datenschutzerklärung
index-neu.html      unbenutzter Alternativ-Entwurf (nicht verlinkt)
robots.txt          Anweisungen für Suchmaschinen
sitemap.xml         Seitenliste für Google
googled084….html    Nachweis für die Google Search Console (nicht löschen!)
assets/css/         Design (styles.css – Farben ganz oben im :root-Block)
assets/js/termine.js  DIE TERMIN-LISTE – hier Termine eintragen/ändern
assets/js/script.js   Menü, Formular & Aufbau der Termin-Kacheln
assets/img/         Bilder (webp/jpg – bitte klein halten)
assets/fonts/       Schriften, lokal eingebunden (DSGVO-konform)
assets/docs/        Kursprogramm als PDF
```

## Technik-Notizen

- **Hosting:** GitHub Pages – baut nach jedem Commit automatisch neu (1–2 Min.).
- **Kontaktformular:** FormSubmit (AJAX) mit Honeypot-Spamschutz; Anfragen
  gehen an das GMX-Postfach. Wird die Ziel-Adresse geändert, verlangt
  FormSubmit einmalig eine neue Bestätigung per Mail.
- **Schriften:** liegen lokal in `assets/fonts/` – die Seite lädt nichts von
  Google-Servern.
- **Sicherheit:** statische Seite ohne Backend; Content-Security-Policy & Co.
  per Meta-Tag. Die Meta-Tags im `<head>` bitte nicht entfernen – ebenso wenig
  wie die Google-Verifizierungsdatei und den `google-site-verification`-Eintrag.
- **Bilder klein halten:** Fotos vor dem Hochladen z. B. auf squoosh.app
  verkleinern (Ziel: unter ca. 300 KB pro Foto).
