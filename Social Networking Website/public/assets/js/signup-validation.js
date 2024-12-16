document.getElementById('signup-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dateOfBirth = document.querySelector('input[name="date-of-birth"]').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // Basic validations
    if (password.length < 8) {
      alert('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          date_of_birth: dateOfBirth,
          username: username,
          email: email,
          password: password
        })
      });
  
      const result = await response.json();
      if (response.status === 201) {
        alert(result.message);
        window.location.href = 'login.html';
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  });  