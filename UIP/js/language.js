// JavaScript for dropdown functionality
const languageBtn = document.getElementById('languageBtn');
const languageDropdown = document.getElementById('languageDropdown');

languageBtn.addEventListener('click', function(event) {
    event.preventDefault();
    languageDropdown.classList.toggle('show');
});

// Close dropdown when an option is clicked
const languageOptions = document.querySelectorAll('.language-option');
languageOptions.forEach(option => {
    option.addEventListener('click', function() {
        // Here you can handle the selection
        console.log(`Selected language: ${this.textContent}`);
        languageDropdown.classList.remove('show'); // Close dropdown
    });
});

// JavaScript for popup functionality
const editBtn = document.getElementById('editBtn');
const editPopup = document.getElementById('editPopup');
const closePopup = document.getElementById('closePopup');

editBtn.addEventListener('click', function() {
    editPopup.style.display = 'flex'; // Show popup
});

closePopup.addEventListener('click', function() {
    editPopup.style.display = 'none'; // Hide popup
});

// Close popup when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === editPopup) {
        editPopup.style.display = 'none';
    }
});
