document.getElementById('infoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const cancerType = document.getElementById('cancerType').value;
    const role = document.getElementById('role').value;

    if (cancerType && role) {
        localStorage.setItem('infoSubmitted', 'true');
        window.location.href = '../html/index.html';
    } else {
        alert('Please fill out both fields.');
    }
    alert("Info submitted successfully!!");
});
