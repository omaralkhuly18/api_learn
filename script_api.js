function getPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            // Create two variables, one before forEach and one after forEach
            const postsContainer = document.getElementById("posts-container");
            postsContainer.innerHTML = ""; // Clear previous posts
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post");
                postElement.innerHTML += `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error("Error fetching posts:", error);
            alert("Failed to fetch posts. Please try again later.");
        });
}
