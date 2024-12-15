document.getElementById('recovery-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    const email = document.getElementById('email').value;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If valid, submit the form
    this.submit();
});