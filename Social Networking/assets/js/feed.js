const notifications = [];

// Chat Section
function openChatSection() {
    alert("Chat Section Opening...");
    window.location.href = "chat.html"; // Redirect to chat page
}

// Notifications Section
function openNotifications() {
    let notificationContent = notifications.length
        ? notifications.join("\n")
        : "No new notifications.";
    alert(notificationContent);
}

// Groups Section
function openGroups() {
    alert("Groups Section Opening...");
    window.location.href = "groups.html"; // Redirect to groups page
}

// Add sample notifications
document.addEventListener("DOMContentLoaded", () => {
    notifications.push("You added John as a friend.");
    notifications.push("You joined the Coding Enthusiasts group.");
});