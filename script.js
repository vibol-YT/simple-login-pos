
const loginBox = document.getElementById("loginBox");
const registerBox = document.getElementById("registerBox");

const showLogin = document.getElementById("showLogin");
const showRegister = document.getElementById("showRegister");


showRegister.addEventListener("click", () => {

    loginBox.classList.remove("active");

    registerBox.classList.add("active");

});



showLogin.addEventListener("click", () => {

    registerBox.classList.remove("active");

    loginBox.classList.add("active");

});


document
    .getElementById("loginForm")
    .addEventListener("submit", (event) => {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;

        console.log("Login:", {
            email,
            password
        });

        alert("Login submitted!");

    });


// =========================
// REGISTER
// =========================

document
    .getElementById("registerForm")
    .addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            document.getElementById("fullName").value;

        const email =
            document.getElementById("registerEmail").value;

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        console.log("Register:", {
            name,
            email,
            password
        });

        alert("Account created successfully!");

    });

