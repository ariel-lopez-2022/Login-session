

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const data = Object.fromEntries(new FormData(registerForm));
  fetch("/api/session/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  })
  .then((res) => res.json())
  .then((data) => {
    window.alert(`Usuario creado`);
    window.location.href = '/login';
  })
  .catch((err) => {
    window.alert('Error al crear usuario');
  });
});
