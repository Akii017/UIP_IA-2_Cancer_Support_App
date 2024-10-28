document.addEventListener("DOMContentLoaded", function () {
    // Edit Profile Popup
    const editBtn = document.getElementById("editBtn");
    const editPopup = document.getElementById("editPopup");
    const saveChangesBtn = document.getElementById("saveChanges");
    const discardChangesBtn = document.getElementById("discardChanges");
    const closePopup = document.getElementById("closePopup"); // Close button
    const profileName = document.getElementById("profileName");
    const profileEmail = document.getElementById("profileEmail");
    const editName = document.getElementById("editName");
    const editEmail = document.getElementById("editEmail");
    const greeting = document.getElementById("greeting");

    // Show the popup when edit button is clicked
    editBtn.addEventListener("click", () => {
        editPopup.style.display = "block";
    });

    // Save changes and update both settings and index.html
    saveChangesBtn.addEventListener("click", () => {
        const newName = editName.value;
        const newEmail = editEmail.value;

        // Update profile details
        profileName.textContent = newName;
        profileEmail.textContent = newEmail;

        // Update greeting in index.html
        greeting.textContent = `Hi ${newName}!`;

        // Show success alert
        alert("Changes made successfully!");

        // Close popup
        editPopup.style.display = "none";
    });

    // Discard changes
    discardChangesBtn.addEventListener("click", () => {
        editPopup.style.display = "none";
    });

    // Close popup when close button is clicked
    closePopup.addEventListener("click", () => {
        editPopup.style.display = "none"; // Close popup
    });

    // Dropdown for languages
    const languageBtn = document.getElementById("languageBtn");
    const languageDropdown = document.getElementById("languageDropdown");

    languageBtn.addEventListener("click", (e) => {
        e.preventDefault();
        languageDropdown.classList.toggle("show");
    });
});
document.getElementById('logoutBtn').addEventListener('click', function (e) {
    e.preventDefault();

    alert("You are successfully logged out!!");

    // Display the logout popup
    //const logoutPopup = document.getElementById('logoutPopup');
    //logoutPopup.style.display = 'block';

    // Redirect to welcome.html after 2 seconds
    setTimeout(function () {
        window.location.href = '../html/welcome.html';
    }, 100);
});
