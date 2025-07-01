🔨 Windows Project — Multifunctional Landing Page with Modal Logic, Calculator, and Timer

🔧 Task:
Enhance an existing frontend project by adding full JavaScript logic: modals, AJAX-based forms, cost calculator, tabs, photo gallery, timer, and automated behaviors. The main focus was on modular architecture and project scalability.

🛠 Technologies:
HTML5, CSS3, JavaScript (ES6+), modular structure, bundling, AJAX (Fetch API), RegExp, responsive layout.

📌 Implemented Features:

🔹 Modals:
* popup_engineer, popup, popup_calc, popup_calc_profile, popup_calc_end, etc.
* Triggered by buttons and text (e.g., “Request a call”, “Ask a specialist”).
* Closable via close icon or dark overlay.
* Reusable, universal modal logic with no code duplication.

🔹 Forms:
* 6 feedback forms, including ones inside modals.
* AJAX submission via fetch and async/await.
* Field validation:
* – Phone: digits only.
* Responsive UI states: loading / success / error.
* On success, the form is cleared and replaced with a confirmation message.

🔹 Window Cost Calculator:
* Choose window shape/type via image preview (highlight active).
* Width and height inputs: digits only.
* Profile selection (warm/cold): single active option.
* Final step: submit all data via a form.
* Modal flow: popup_calc → popup_calc_profile → popup_calc_end.

🔹 Tabs:
* Switch active tab via text/image click.
* Active states assigned (active, after_click).
* Universal handler works for all tab groups.

🔹 Image Gallery:
* Click to view full-screen image with dark overlay.
* Close by clicking outside the image.
* Implemented purely in JavaScript without DOM restructuring.

🔹 Timer:
* Countdown timer with a preset deadline.
* Reusable solution for future projects.

🔹 Automated Events:
* If the user stays on the page for 60 seconds — show a modal popup.
* If the user scrolls to the bottom — show a popup with a gift, and hide the gift element.

✅ Architecture:
* All logic is split into modules.
* Connected via a bundler.
* No duplication — a unified event-handling system is used.
