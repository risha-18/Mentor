// Registration Logic
document.getElementById('registrationForm')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get user input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const categories = Array.from(document.getElementById('categories').selectedOptions).map(option => option.value);

    // Validate age
    if (age >= 10 && age <= 80) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify({ name, age, email, categories }));
        alert('Registration Successful! Please login.');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert('Age must be between 10 and 80.');
    }
});

// Login Logic
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const storedUser = JSON.parse(localStorage.getItem('user')); // Retrieve stored user data

    // Check if email matches
    if (storedUser && storedUser.email === email) {
        // Store logged-in user in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert('Invalid email. Please register first.');
    }
});

// Dashboard Logic
window.onload = function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
        window.location.href = 'login.html'; // Redirect to login if not logged in
    }

    // Display user's name
    document.getElementById('username').textContent = loggedInUser.name;

    // Display selected book categories
    const bookList = document.getElementById('bookList');
    loggedInUser.categories.forEach(function(category) {
        const li = document.createElement('li');
        li.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize first letter
        bookList.appendChild(li);
    });

    // Logout functionality
    document.getElementById('logout')?.addEventListener('click', function() {
        localStorage.removeItem('loggedInUser'); // Remove logged-in user
        window.location.href = 'login.html'; // Redirect to login page
    });
};
