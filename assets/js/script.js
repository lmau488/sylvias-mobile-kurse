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
