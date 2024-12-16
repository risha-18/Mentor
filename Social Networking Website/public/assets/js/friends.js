// Mock data
const friends = ["Alice", "Bob", "Charlie"];
const followers = ["David", "Eve", "Frank"];
const suggestions = ["Grace", "Hannah", "Isaac"];

// Render lists
function renderList(listId, data) {
    const list = document.getElementById(listId);
    list.innerHTML = ""; // Clear the list

    data.forEach((person) => {
        const listItem = document.createElement("li");

        // Add name
        const name = document.createElement("span");
        name.textContent = person;
        listItem.appendChild(name);

        // Add button
        const button = document.createElement("button");
        if (listId === "suggestions-ul") {
            button.textContent = "Add";
            button.classList.add("add");
            button.onclick = () => {
                friends.push(person); // Add to friends list
                suggestions.splice(suggestions.indexOf(person), 1); // Remove from suggestions
                renderAll();
            };
        } else {
            button.textContent = "Remove";
            button.classList.add("remove");
            button.onclick = () => {
                data.splice(data.indexOf(person), 1); // Remove from the active list
                renderAll();
            };
        }
        listItem.appendChild(button);

        list.appendChild(listItem);
    });
}

// Show selected tab and render appropriate list
function showTab(tabName) {
    const friendsList = document.getElementById("friends-list");
    const followersList = document.getElementById("followers-list");

    if (tabName === "friends") {
        friendsList.classList.remove("hidden");
        followersList.classList.add("hidden");
        renderList("friends-ul", friends);
    } else {
        followersList.classList.remove("hidden");
        friendsList.classList.add("hidden");
        renderList("followers-ul", followers);
    }
}

// Filter list
function filterList() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const activeList = document.getElementById("friends-list").classList.contains("hidden")
        ? followers
        : friends;

    const filtered = activeList.filter((person) => person.toLowerCase().includes(query));
    const listId = document.getElementById("friends-list").classList.contains("hidden")
        ? "followers-ul"
        : "friends-ul";

    renderList(listId, filtered);
}

// Render all lists initially
function renderAll() {
    renderList("friends-ul", friends);
    renderList("followers-ul", followers);
    renderList("suggestions-ul", suggestions);
}

// Initial render
renderAll();