// Mock data
const myGroups = ["Tech Enthusiasts", "Book Club", "Music Lovers"];
const discoverGroups = ["Photography Fans", "Fitness Geeks", "Travel Buddies"];

// Render lists
function renderList(listId, data, isMyGroup) {
    const list = document.getElementById(listId);
    list.innerHTML = ""; // Clear the list

    data.forEach((group) => {
        const listItem = document.createElement("li");

        // Add group name
        const groupName = document.createElement("span");
        groupName.textContent = group;
        listItem.appendChild(groupName);

        // Add action button
        const button = document.createElement("button");
        button.textContent = isMyGroup ? "Leave" : "Join";
        button.classList.add(isMyGroup ? "remove" : "add");
        button.onclick = () => {
            if (isMyGroup) {
                myGroups.splice(myGroups.indexOf(group), 1); // Remove from my groups
            } else {
                myGroups.push(group); // Add to my groups
                discoverGroups.splice(discoverGroups.indexOf(group), 1); // Remove from discoverable groups
            }
            renderAll();
        };
        listItem.appendChild(button);

        list.appendChild(listItem);
    });
}

// Show selected tab
function showTab(tabName) {
    document.getElementById("my-groups").classList.toggle("hidden", tabName !== "my-groups");
    document.getElementById("discover-groups").classList.toggle("hidden", tabName !== "discover-groups");
}

// Render all lists
function renderAll() {
    renderList("my-groups-list", myGroups, true);
    renderList("discover-groups-list", discoverGroups, false);
}

// Initial render
renderAll();