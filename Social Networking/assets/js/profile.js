// Function to toggle between profile view and edit mode
function toggleEditMode() {
    const profileDetails = document.querySelector('.profile-info');
    const editSection = document.getElementById('edit-profile-section');
    const editButton = document.getElementById('edit-btn');
    
    if (editSection.style.display === "none" || editSection.style.display === "") {
        // Hide profile details and show the edit form
        profileDetails.style.display = "none";
        editSection.style.display = "block";
        editButton.style.display = "none"; // Hide edit button
    } else {
        // Show profile details and hide the edit form
        profileDetails.style.display = "block";
        editSection.style.display = "none";
        editButton.style.display = "inline"; // Show edit button
    }
}

// Handle the form submission
document.getElementById('edit-profile-form').onsubmit = function(e) {
    e.preventDefault();  // Prevent form submission for now
    // Here you can implement the logic to save profile updates (e.g., API call)
    alert("Profile updated successfully!");
    toggleEditMode();  // Return to profile view
}