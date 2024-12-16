document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password validation (optional, check for minimum length or rules)
    if (password.trim() === "") {
        alert("Password cannot be empty.");
        return;
    }

    // Redirect to feed.html upon successful validation
    window.location.href = "feed.html";
});