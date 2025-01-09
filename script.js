// Add event listener to the form
document.querySelector('form').addEventListener('submit', (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    
    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Display a success message
    alert('Thank you for your message!');
});
