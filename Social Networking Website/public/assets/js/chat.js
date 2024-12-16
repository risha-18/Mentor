function showChat() {
    document.getElementById("chat-section").style.display = "block";
    document.getElementById("groups-section").style.display = "none";
}

function showGroups() {
    document.getElementById("chat-section").style.display = "none";
    document.getElementById("groups-section").style.display = "block";
}

function openChat(user) {
    const chatWindow = document.getElementById("chat-window");
    const chatUser = document.getElementById("chat-user");
    chatUser.textContent = user;
    chatWindow.style.display = "block";
}

function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const chatMessages = document.getElementById("chat-messages");

    if (messageInput.value.trim() !== "") {
        const newMessage = document.createElement("div");
        newMessage.textContent = messageInput.value;
        newMessage.className = "user-message";
        chatMessages.appendChild(newMessage);
        messageInput.value = "";
    }
}

function openGroup(group) {
    const groupWindow = document.getElementById("group-window");
    const groupName = document.getElementById("group-name");
    groupName.textContent = group;
    groupWindow.style.display = "block";
}

function postToGroup() {
    const groupMessageInput = document.getElementById("group-message-input");
    const groupContent = document.getElementById("group-content");

    if (groupMessageInput.value.trim() !== "") {
        const newPost = document.createElement("div");
        newPost.textContent = groupMessageInput.value;
        newPost.className = "group-post";
        groupContent.appendChild(newPost);
        groupMessageInput.value = "";
    }
}