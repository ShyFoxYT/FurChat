const registerForm = document.getElementById("register-form");
const resultDiv = document.getElementById("result");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Standardverhalten des Formulars verhindern

  // Formulardaten sammeln und an die PHP-Seite senden
  const formData = new FormData(registerForm);
  fetch("register.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((responseText) => {
      // Antwort von der PHP-Seite in das result-DIV einfügen
      resultDiv.innerHTML = responseText;
    })
    .catch((error) => {
      console.error(error);
      resultDiv.innerHTML = "Fehler beim Senden des Formulars";
    });
});