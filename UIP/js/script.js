// Initially, show the Welcome page
window.onload = function() {
    document.getElementById('welcome-page').style.display = 'flex';
};

// Function to show the Login page
function showLoginPage() {
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'flex';
}

// Function to show the Home page
function showHomePage() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
}

// Function to show Welcome page from login
function showWelcomePage() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('welcome-page').style.display = 'flex';
}
