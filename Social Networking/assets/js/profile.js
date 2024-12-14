// JavaScript to handle profile editing functionality

// Function to toggle the edit profile section visibility
function toggleEditMode() {
    const editSection = document.getElementById("edit-profile-section");
    const profileInfo = document.querySelector(".profile-info");

    if (editSection.style.display === "none" || editSection.style.display === "") {
        editSection.style.display = "block";
        profileInfo.style.display = "none";
    } else {
        editSection.style.display = "none";
        profileInfo.style.display = "block";
    }
}

// Handle the form submission
const editProfileForm = document.getElementById("edit-profile-form");
editProfileForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const locationInput = document.getElementById("location").value;
    const bioInput = document.getElementById("bio").value;

    // Update the displayed profile information
    if (nameInput) {
        document.querySelector(".profile-details h1").textContent = nameInput;
    }

    if (bioInput) {
        document.querySelector(".profile-details p").textContent = bioInput;
    }

    if (emailInput) {
        document.querySelector(".info-item:nth-of-type(1) strong").nextSibling.textContent = " " + emailInput;
    }

    if (locationInput) {
        document.querySelector(".info-item:nth-of-type(2) strong").nextSibling.textContent = " " + locationInput;
    }

    // Close the edit section
    toggleEditMode();
});