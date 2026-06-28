# Sylvias mobile Kurse – Website

Eine statische Website (reines HTML/CSS/JS) für den mobilen Kochkurs-Service.
Kein Server, keine Datenbank, keine Plugins – dadurch **schnell, kostenlos und
praktisch nicht hackbar**.

---

## 📁 Was ist drin?

```
Website/
├── index.html          ← die Startseite (alle Inhalte)
├── impressum.html      ← Impressum (Pflicht in DE) – noch ausfüllen
├── datenschutz.html    ← Datenschutz (Pflicht in DE) – noch prüfen
├── robots.txt          ← Anweisungen für Suchmaschinen
├── assets/
│   ├── css/styles.css  ← das komplette Design (Farben oben anpassbar)
│   ├── js/script.js    ← Menü + Formular-Logik
│   └── img/            ← hier deine Bilder ablegen (Logo, Fotos)
└── README.md           ← diese Anleitung
```

---

## 👀 Vorschau auf dem eigenen Rechner

Einfach `index.html` doppelklicken – sie öffnet sich im Browser. Mehr braucht es
zum Anschauen nicht.

---

## ✏️ Inhalte ändern (das Wichtigste für später)

Alles in **`index.html`**. Such einfach nach dem Text, den du ändern willst.
Häufige Stellen:

- **Telefon & E-Mail:** ganz oben im `<header>` und unten im Kontakt-Bereich.
  Aktuell überall Platzhalter `0000 / 000 000` und `info@sylvias-mobile-kurse.de`.
- **Kurse & Preise:** im Abschnitt `ANGEBOT` und `PREISE`.
- **Über mich:** im Abschnitt `ÜBER MICH`.
- **Farben:** in `assets/css/styles.css` ganz oben im Block `:root` – dort die
  Farbwerte (`--terracotta`, `--olive` usw.) ändern, der Rest passt sich an.
- **Bilder (wichtig!):** Die Seite ist bereits auf Logo und Fotos verdrahtet. Lege
  diese drei Dateien mit **genau diesen Namen** im Ordner `assets/img/` ab, dann
  erscheinen sie automatisch:
  | Datei | Verwendung |
  |-------|------------|
  | `logo.png` | Logo in Kopf- und Fußzeile (das Logo „Sylvias Mobile Kurse") |
  | `sylvia.jpg` | Farbfoto von Sylvia im Abschnitt „Über mich" |
  | `sylvia-sw.jpg` | Schwarz-Weiß-Foto als Hintergrund im Kopfbereich |

  Solange die Dateien fehlen, bleiben die Stellen einfach leer/grün – sobald du sie
  ablegst, ist alles da. Weitere Fotos kannst du jederzeit ergänzen.

> Tipp: Sag mir einfach im Chat, was geändert werden soll – ich pass es an.

---

## 🚀 Live schalten mit GitHub Pages (kostenlos)

Du brauchst keinen Programmier-Befehl. Über die GitHub-Website geht alles per Klick.

### Schritt 1 – Repository anlegen
1. Auf [github.com](https://github.com) einloggen.
2. Oben rechts **+ → New repository**.
3. Name z.&nbsp;B. `sylvias-mobile-kurse`, **Public**, dann **Create repository**.

### Schritt 2 – Dateien hochladen
1. Im neuen Repo: **Add file → Upload files**.
2. Den **gesamten Inhalt** des `Website`-Ordners reinziehen (index.html, assets-Ordner, usw.).
3. Unten **Commit changes**.

### Schritt 3 – Pages aktivieren
1. Im Repo: **Settings → Pages**.
2. Bei *Source* **Deploy from a branch** wählen, Branch **main**, Ordner **/ (root)**, **Save**.
3. Nach 1–2 Minuten erscheint die Adresse, z.&nbsp;B.
   `https://deinname.github.io/sylvias-mobile-kurse/` – fertig, sie ist online! 🎉

### Schritt 4 – Eigene Domain anschließen (nach Kauf)
1. Domain kaufen (z.&nbsp;B. bei IONOS, Strato, Namecheap). Empfehlung:
   `sylvias-mobile-kurse.de`.
2. Im Repo: **Settings → Pages → Custom domain** → Domain eintragen → **Save**.
   (Das legt automatisch eine `CNAME`-Datei an.)
3. Beim Domain-Anbieter im DNS folgendes eintragen:
   - Einen **CNAME**-Eintrag `www` → `deinname.github.io`
   - Vier **A**-Records für die nackte Domain auf GitHubs IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Im Repo **„Enforce HTTPS"** anhaken (kommt nach kurzer Wartezeit). Damit ist
   die Seite verschlüsselt erreichbar.

---

## ✉️ Kontaktformular aktivieren (3 Minuten, kostenlos)

Eine statische Seite kann selbst keine Mails verschicken. Wir nutzen dafür
**Web3Forms** – kostenlos, 250 Anfragen/Monat, kein Konto mit Passwort nötig.

1. Auf [web3forms.com](https://web3forms.com) deine E-Mail eingeben → du bekommst
   per Mail einen **Access Key**.
2. In `index.html` die Zeile suchen:
   ```html
   <input type="hidden" name="access_key" value="DEIN-WEB3FORMS-KEY" />
   ```
   und `DEIN-WEB3FORMS-KEY` durch deinen Schlüssel ersetzen.
3. Fertig – Anfragen landen automatisch in deinem Postfach.

Bis das gemacht ist, zeigt das Formular einen freundlichen Hinweis und verrät
Telefon/Mail als Alternative. Ein **Honeypot-Feld** (für Besucher unsichtbar)
filtert automatisch Spam-Bots heraus.

> Alternativen, falls gewünscht: Formspree, Getform, Basin – funktionieren ähnlich.

---

## 🔒 Sicherheit – warum diese Seite so sicher ist

Du wolltest „sicher gegen alle Angriffe, Frontend & Backend". Der beste Trick:
**Es gibt gar kein Backend.** Die meisten Website-Hacks treffen Server,
Datenbanken oder veraltete Plugins (genau das Risiko bei WordPress). Eine
statische Seite hat davon nichts – es gibt schlicht nichts zum Einbrechen.

Was bereits eingebaut ist:

- ✅ **Kein Server / keine Datenbank / keine Plugins** → keine klassische Angriffsfläche.
- ✅ **HTTPS/SSL** automatisch über GitHub Pages (Schritt 3–4 oben).
- ✅ **Content-Security-Policy** per Meta-Tag in jeder HTML-Datei (blockt fremde Skripte / XSS).
- ✅ **X-Content-Type-Options: nosniff** gegen MIME-Tricks.
- ✅ **Honeypot-Spamschutz** im Formular.
- ✅ **Keine Tracking-Cookies**, kein Werbe-Code.

### „Wie gebe ich dir Plugins für mehr Sicherheit?"
Kurze, gute Nachricht: **brauchst du hier nicht.** Sicherheits-Plugins gibt es
nur bei Systemen wie WordPress – und die existieren vor allem, weil WordPress
selbst angreifbar ist. Unsere statische Seite braucht so etwas nicht.

### Optional: maximale Absicherung mit Cloudflare (gratis)
GitHub Pages erlaubt leider keine „echten" Sicherheits-Header (nur die Meta-Tag-
Variante oben). Wer das letzte Stück Härtung will, schaltet **Cloudflare**
kostenlos davor:

- Volle Security-Header (HSTS, X-Frame-Options, strikte CSP) via Cloudflare-Regeln.
- **DDoS-Schutz** und Web Application Firewall inklusive.
- Schnelleres Laden weltweit (CDN).

Einrichtung: Domain bei Cloudflare als kostenloses Konto hinzufügen, Nameserver
beim Domain-Anbieter auf Cloudflare umstellen, fertig. Sag Bescheid, dann
führe ich dich durch.

---

## 🧩 Nächste Ideen (wenn du magst)
- Echte Fotos & Logo einbauen
- Aktuelle Kurstermine als Liste
- Galerie vergangener Events
- Gutschein-/Bestellfunktion

Sag mir einfach im Chat, was als Nächstes dran ist. 🍳
