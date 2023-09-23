(function () {
  // Array of available fonts for captcha
  const fonts = ["cursive", "sans-serif", "serif", "monospace"];

  // Initialize captchaValue
  let captchaValue = "";

  // Function to generate a random captcha
  function generateCaptcha() {
    let value = btoa(Math.random() * 1000000000);
    value = value.substr(0, 5 + Math.random() * 5);
    captchaValue = value;
  }

  // Function to set the captcha in the preview
  function setCaptcha() {
    let html = captchaValue.split("").map((char) => {
      const rotate = -20 + Math.trunc(Math.random() * 30);
      const font = Math.trunc(Math.random() * fonts.length);
      return `<span 
        style="
          transform:rotate(${rotate}deg);
          font-family:${fonts[font]}
        "
      >${char}</span>`;
    }).join("");
    document.querySelector(".login-form .captcha .preview").innerHTML = html;
  }

  // Function to initialize captcha and refresh button
  function initCaptcha() {
    document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click", function () {
      generateCaptcha();
      setCaptcha();
    });
    generateCaptcha();
    setCaptcha();
  }

  // Initialize captcha
  initCaptcha();

  // Event listener for the login button
  document.querySelector(".login-form #login-btn").addEventListener("click", function () {
    let inputCaptchaValue = document.querySelector(".login-form .captcha input").value;
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    // Check if the username and password match the specific values and captcha is correct
    if (username === "usr-verify","getaccess-usr","artist-usr" && password === "usr-verify-passwd","accessme-passwd","artist-passwd" && inputCaptchaValue === captchaValue) {
      // Redirect to main.html
      window.location.href = "main.html";
    } else {
      // Display an error message
      swal("Invalid credentials or captcha");
    }
  });
})();