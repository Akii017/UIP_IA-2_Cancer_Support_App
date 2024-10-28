function togglePassword() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
}

function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (fullName === "" || email === "" || password === "") {
        alert("All fields are required!");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email!");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return false;
    }

    // Redirect to info.html upon successful signup
    window.location.href = "../html/info.html";
    return false; // Prevent form submission for demo purposes
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
