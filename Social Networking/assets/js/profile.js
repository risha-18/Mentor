// Function to toggle profile editing
function toggleEditMode() {
    const editSection = document.getElementById("edit-profile-section");
    const profileInfo = document.getElementById("profile-info");
    const settingsSection = document.getElementById("settings-section");

    // Hide other sections and show edit mode
    settingsSection.style.display = "none";
    profileInfo.style.display = "none";
    editSection.style.display = editSection.style.display === "none" ? "block" : "none";
}

// Function to toggle settings section
function toggleSettings() {
    const settingsSection = document.getElementById("settings-section");
    const profileInfo = document.getElementById("profile-info");
    const editSection = document.getElementById("edit-profile-section");

    // Hide other sections and show settings
    editSection.style.display = "none";
    profileInfo.style.display = "none";
    settingsSection.style.display = "block"; // Show settings
}

// Ensure profile section is visible by default
function showProfileSection() {
    const profileInfo = document.getElementById("profile-info");
    const editSection = document.getElementById("edit-profile-section");
    const settingsSection = document.getElementById("settings-section");

    // Show only the profile section by default
    editSection.style.display = "none";
    settingsSection.style.display = "none";
    profileInfo.style.display = "block"; // Profile section visible by default
}

// Initialize the page and show profile section
window.onload = showProfileSection;

// Navbar action for Profile link
function toggleProfile() {
    showProfileSection();
}