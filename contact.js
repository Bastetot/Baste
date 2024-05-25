// contact.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the form data to the server using AJAX or fetch API
    //...

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Show a success message
    alert('Thank you for your message! We will get back to you soon.');
});