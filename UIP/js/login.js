function togglePassword() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
}

function validateLogin() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === "" || password === "") {
        alert("Both fields are required!");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email!");
        return false;
    }

    if (password.length < 6) {
        alert("Password incorrect!! Must be 6 charachters long atleast !!");
        return false;
    }

    // Redirect to index.html upon successful login
    window.location.href = "../html/index.html";
    return false; // Prevent form submission for demo purposes
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
