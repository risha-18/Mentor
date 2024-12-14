document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Get form values
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value;

    // Password validation
    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }
    
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If all validations pass, submit the form
    this.submit();
});