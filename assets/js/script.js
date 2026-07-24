/* =====================================================================
   Sylvias mobile Kurse – Interaktivität
   Bewusst minimal & ohne externe Bibliotheken (sicher & schnell).
   ===================================================================== */

// --- Mobiles Menü auf-/zuklappen ---
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Menü schließen, wenn ein Link angeklickt wird
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// --- Jahreszahl im Footer automatisch setzen ---
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// --- Kontaktformular abschicken (ohne Seiten-Neuladen) ---
const form = document.getElementById("kontaktForm");
const status = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    showStatus("Wird gesendet …", "");

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      });
      const json = await res.json();

      if (json.success === true || json.success === "true") {
        showStatus("Vielen Dank! Deine Anfrage wurde gesendet. Ich melde mich bald.", "ok");
        form.reset();
      } else if (json.message && json.message.indexOf("Activation") !== -1) {
        showStatus("Das Formular wird gerade eingerichtet. Bitte schreib mir solange direkt eine Mail oder ruf an.", "err");
      } else {
        showStatus("Es gab ein Problem. Bitte versuche es später erneut oder schreib mir direkt eine Mail.", "err");
      }
    } catch (err) {
      showStatus("Keine Verbindung möglich. Bitte versuche es später erneut.", "err");
    }
  });
}

function showStatus(msg, type) {
  if (!status) return;
  status.textContent = msg;
  status.className = "form-status" + (type ? " " + type : "");
}

/* =====================================================================
   Termine aufbauen – liest die Liste aus assets/js/termine.js und
   erzeugt daraus die Termin-Kacheln. (Zum Ändern IMMER termine.js
   bearbeiten, hier drin ist nichts einzustellen.)
   ===================================================================== */
(function () {
  const box = document.querySelector(".termine");
  if (!box || typeof window.TERMINE !== "string") return;

  const STATUS = {
    frei:   { cls: "termin__status--free", txt: "Plätze frei" },
    wenige: { cls: "termin__status--few",  txt: "Nur noch wenige Plätze" },
    voll:   { cls: "termin__status--full", txt: "Ausgebucht" }
  };

  const CLOCK = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
  const PIN   = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  const html = window.TERMINE.split("\n").map(function (raw) {
    const line = raw.trim();
    if (!line || line.charAt(0) === "#") return "";            // leere Zeile / Notiz
    const f = line.split("|").map(function (x) { return x.trim(); });
    if (f.length < 7) return "";                                // unvollständige Zeile überspringen
    const st = STATUS[(f[6] || "").toLowerCase()] || STATUS.frei;
    return (
      '<article class="termin">' +
        '<div class="termin__date" aria-hidden="true">' +
          '<span class="termin__day">' + esc(f[0]) + '</span>' +
          '<span class="termin__month">' + esc(f[1]) + '</span>' +
        '</div>' +
        '<div class="termin__body">' +
          '<h3 class="termin__title">' + esc(f[2]) + '</h3>' +
          '<p class="termin__meta">' +
            CLOCK + ' ' + esc(f[3]) + ' &nbsp;·&nbsp; ' +
            PIN + ' ' + esc(f[4]) + ' &nbsp;·&nbsp; ' + esc(f[5]) +
          '</p>' +
        '</div>' +
        '<div class="termin__side">' +
          '<span class="termin__status ' + st.cls + '">' + st.txt + '</span>' +
          '<a href="#kontakt" class="btn btn--primary termin__cta">Platz anfragen</a>' +
        '</div>' +
      '</article>'
    );
  }).join("");

  box.innerHTML = html;
})();
