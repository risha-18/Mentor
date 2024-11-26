// Array of colors to cycle through
const colors = [
    'red', 'blue', 'green', 'orange', 'purple', 
    'pink', 'yellow', 'cyan', 'magenta', 'lime', 
    'brown', 'grey'
];

let currentColorIndex = 0; // Index to track the current color

// Function to handle login
function login() {
    const username = document.getElementById('username').value; // Get username input
    const password = document.getElementById('password').value; // Get password input
    const errorElement = document.getElementById('error'); // Get error message element

    // Simple password validation
    if (password === "pass") { // Check if password is correct
        document.getElementById('userName').innerText = username; // Display username
        document.getElementById('login').style.display = 'none'; // Hide login section
        document.getElementById('welcome').style.display = 'block'; // Show welcome section
        errorElement.innerText = ''; // Clear any previous error message
    } else {
        errorElement.innerText = 'Invalid password. Please try again.'; // Show error message
    }
}

// Function to change the color of the username
function changeColor() {
    const userNameSpan = document.getElementById('userName'); // Get username span
    userNameSpan.style.color = colors[currentColorIndex]; // Change color to current color
    currentColorIndex = (currentColorIndex + 1) % colors.length; // Move to the next color, cycling back to the start
}