document.addEventListener("DOMContentLoaded", () => {
    // Logout functionality
    const logoutBtn = document.querySelector(".logout-btn");
    logoutBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const confirmLogout = confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            window.location.href = "index.html"; // Redirect to index.html
        }
    });

    // Like, Comment, Share functionality
    const likeButtons = document.querySelectorAll(".like-btn");
    const commentButtons = document.querySelectorAll(".comment-btn");
    const shareButtons = document.querySelectorAll(".share-btn");

    likeButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("You liked this post!");
        });
    });

    commentButtons.forEach(button => {
        button.addEventListener("click", () => {
            const comment = prompt("Enter your comment:");
            if (comment) {
                alert(`Your comment: "${comment}" has been posted.`);
            }
        });
    });

    shareButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("This post has been shared!");
        });
    });

    // Trending Topics
    const trendingItems = document.querySelectorAll(".trending li");
    trendingItems.forEach(item => {
        item.addEventListener("click", () => {
            alert(`You clicked on trending topic: ${item.textContent}`);
        });
    });

    // Stories Click Alert
    const stories = document.querySelectorAll(".story");
    stories.forEach(story => {
        story.addEventListener("click", () => {
            alert(`${story.textContent} clicked!`);
        });
    });
});