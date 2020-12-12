const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page successfully loaded");

  $.querySelector("#login-btn").addEventListener("click", () => {
    $.querySelector("#signup-modal").classList.toggle("signup-modal");
  });

  $.querySelector("#signup-close-modal").addEventListener("click", () => {
    $.querySelector("#signup-modal").classList.toggle("signup-modal");
  });

  $.querySelector("#signup2login").addEventListener("click", () => {
    $.querySelector("#signup-modal").classList.toggle("signup-modal");
    $.querySelector("#login-modal").classList.toggle("login-modal");
  });

  $.querySelector("#login-close-modal").addEventListener("click", () => {
    $.querySelector("#login-modal").classList.toggle("login-modal");
  });

  $.querySelector("#signup-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const newUserData = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#signup-email").value,
      password: $.querySelector("#signup-password").value,
      description: $.querySelector("#description").value,
    };
    console.log(newUserData);

    const response = await axios.post(
      "https://8daa4f001c8e.ngrok.io/signup-form",
      newUserData
    );
    console.log(response);
  });

  $.querySelector("#login-form").addEventListener("click", (event) => {
    event.preventDefault();
  });
});
