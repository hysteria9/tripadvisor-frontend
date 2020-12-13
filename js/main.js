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
      "https://ca91c00cf1ad.ngrok.io/signup-form",
      newUserData
    );
    console.log(response);
  });

  $.querySelector("#login-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const loginUserData = {
      email: $.querySelector("#login-email").value,
      password: $.querySelector("#login-password").value,
    };
    console.log(loginUserData);

    const response = await axios.post(
      "https://ca91c00cf1ad.ngrok.io/login-form",
      loginUserData
    );
    console.log(response);
  });
});
