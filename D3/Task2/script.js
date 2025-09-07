document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const rememberMeCheckbox = document.getElementById("rememberMe");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const clearButton = document.getElementById("clearButton");

    function loadRememberedEmail() {
        const rememberedEmail = localStorage.getItem("rememberedUserEmail");
        if (rememberedEmail) {
            emailInput.value = rememberedEmail;
            rememberMeCheckbox.checked = true;

            welcomeMessage.textContent = `Welcome back, ${rememberedEmail}!`;
            welcomeMessage.classList.remove("hidden");
        }
    }

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const email = emailInput.value;
        const password = document.getElementById("password").value;

        if (rememberMeCheckbox.checked) {
            localStorage.setItem("rememberedUserEmail", email);
            console.log(`Email '${email}' has been saved to local storage.`);
        } else {
            // If not checked remove previo saved email
            localStorage.removeItem("rememberedUserEmail");
            console.log(
                "Remember Me is not checked. Email removed from local storag."
            );
        }

        alert(`Login attempt for: ${email}`);
    });

    clearButton.addEventListener("click", () => {
        localStorage.removeItem("rememberedUserEmail");
        emailInput.value = "";
        rememberMeCheckbox.checked = false;
        welcomeMessage.classList.add("hidden");
        alert("Remembered email has been cleared.");
    });

    loadRememberedEmail();
});
