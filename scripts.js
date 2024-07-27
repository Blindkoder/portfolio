function showDetails(id) {
    var details = document.getElementById(id);
    if (details.classList.contains('show')) {
        details.classList.remove('show');
    } else {
        details.classList.add('show');
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted! Thank you for contacting me.');
    // Here you can add code to send the form data to your email or server
});
