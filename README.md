# SylviasGusto – Website

Statische Website (reines HTML/CSS/JS – kein Server, keine Datenbank, keine
Plugins) für **SylviasGusto: mobile Koch- & Backkurse** in Wolnzach (Hallertau).

Live: **https://sylviasgusto.de/**

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
| **Termine** | stehen in einer eigenen, einfachen Datei: **`assets/js/termine.js`** – pro Termin eine Zeile, ganz ohne HTML. Zurzeit sind keine eingetragen, die Seite verweist aufs Kursprogramm-PDF |
| `ÄNDERN: ANGEBOTE` | Kurs-Karten: Texte |
| `ÄNDERN: LEISTUNGEN` | Kacheln im grünen Bereich (Angebots-Überblick) |
| `ÄNDERN: KURSSEITEN` | Kacheln, die auf die einzelnen Kursseiten führen |
| `ÄNDERN: ORTE` | Kacheln und Ortsnamen im Einsatzgebiet |
| `ÄNDERN: FAKTEN` | Kurzangaben im Block „SylviasGusto in Kürze" |
| `ÄNDERN: TELEFON` | Telefonnummer freischalten (2 Stellen) |
| `ÄNDERN: KUNDENSTIMMEN` | Echte Zitate eintragen und Sektion einblenden |
| `ÄNDERN: FAQ` | Fragen ergänzen oder anpassen |

**Preise und Kursdauern stehen bewusst nicht auf der Website** – sie werden
auf Anfrage genannt (Hinweis dazu steht im grünen Leistungs-Bereich).

Die ausführliche Schritt-für-Schritt-Anleitung (mit Checkliste und
„Rückgängig machen") liegt als `Anleitung-Website-aendern.html` im lokalen
Website-Ordner auf dem PC.

---

## Unterseiten (für Google & KI-Suche)

Neben der Startseite gibt es zu jedem Thema und zu den wichtigsten Orten eine
eigene Seite. Grund: Google und KI-Assistenten (ChatGPT, Perplexity, Gemini)
können eine Website nur für die Begriffe anzeigen, zu denen es auch eine
passende Seite gibt. Eine einzige Seite kann nicht gleichzeitig für
„Brotbackkurs" und „Kochkurs Ingolstadt" ganz oben stehen.

**Kursseiten**

| Datei | Thema |
|---|---|
| `mobiler-kochkurs.html` | Mobiler Kochkurs zuhause |
| `brotbackkurs-sauerteig.html` | Brotbackkurs & Sauerteig |
| `kinderkochkurs.html` | Kinderkochkurs ab 5 Jahren |
| `kindergeburtstag-kochen.html` | Kindergeburtstag mit Kochen & Backen |
| `kraeuterkurse-naturkosmetik.html` | Kräuterkurse, Naturkosmetik, Hausapotheke |
| `ernaehrungskochkurs.html` | Ernährungskochkurse „Gesund genießen" |
| `firmenevent-vereine-kochkurs.html` | Vereine, Gruppen & Firmen |

**Ortsseiten**

| Datei | Ort / Region |
|---|---|
| `kochkurs-wolnzach-hallertau.html` | Wolnzach & Hallertau |
| `kochkurs-ingolstadt.html` | Ingolstadt |
| `kochkurs-pfaffenhofen.html` | Pfaffenhofen an der Ilm |
| `kochkurs-freising.html` | Freising |
| `kochkurs-landshut.html` | Landshut |

Alle Unterseiten sind gleich aufgebaut (Kopfzeile → Titelbereich → Text →
„Auf einen Blick" → Inhalte → Fragen & Antworten → Anfrage-Kasten → Fußzeile)
und werden wie die Startseite bearbeitet: nur den Text zwischen den spitzen
Klammern ändern.

**Wichtig, wenn eine neue Seite dazukommt oder eine wegfällt:**
`sitemap.xml`, `llms.txt` und die Fußzeilen-Links in *allen* HTML-Dateien
entsprechend anpassen.

---

## Nach jeder Änderung kurz prüfen

- Tab **Actions**: ist der letzte Lauf grün?
- Live-Seite öffnen, mit **Strg+F5** neu laden, geänderte Stelle anschauen.
- Browserfenster einmal schmal ziehen: sieht die Handy-Ansicht gut aus?

Etwas kaputtgegangen? Nichts ist verloren: Datei anklicken → **History** →
alte Version öffnen und den Inhalt zurückkopieren (Details in der Anleitung).

---

## Was ist was?

```
index.html          Startseite
mobiler-kochkurs.html … 12 Unterseiten zu Kursen und Orten (siehe Tabelle oben)
impressum.html      Impressum
datenschutz.html    Datenschutzerklärung
404.html            Seite für „Adresse gibt es nicht" (zeigt GitHub Pages automatisch)
robots.txt          Anweisungen für Suchmaschinen und KI-Crawler
sitemap.xml         Seitenliste für Google – ALLE Seiten müssen hier stehen
llms.txt            Kurzprofil für KI-Assistenten (ChatGPT, Perplexity & Co.)
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

## SEO & KI-Suche (GEO)

- Jede Seite hat einen eigenen Titel, eine eigene Beschreibung, ein
  `canonical`-Tag und einen unsichtbaren Datenblock (`application/ld+json`)
  mit Angaben zum Betrieb, zur Kursleiterin, zu den Angeboten und den
  häufigen Fragen. **Diese Blöcke bitte nicht verändern.**
- `robots.txt` erlaubt ausdrücklich auch die KI-Crawler (GPTBot,
  OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended u. a.).
- `llms.txt` fasst das Angebot in Klartext zusammen – daraus zitieren
  KI-Assistenten besonders gerne.
- **Was am meisten bringt und außerhalb dieser Dateien passiert:** ein
  vollständiges **Google-Unternehmensprofil** (Google Business Profile) mit
  echten Fotos, Leistungen und Bewertungen sowie Einträge und Erwähnungen auf
  anderen Seiten (Vereins-Websites, Gemeindeblatt, Branchenverzeichnisse) –
  immer mit exakt gleichem Namen, gleicher Adresse und gleicher Mailadresse
  wie im Impressum.
- Nach größeren Änderungen: in der **Google Search Console** die Sitemap neu
  einreichen und einzelne neue Seiten über „URL-Prüfung → Indexierung
  beantragen" anstoßen.
