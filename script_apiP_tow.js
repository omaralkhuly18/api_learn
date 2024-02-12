// create function get of all posts start
function GetPosts(userId) {
    // Create an object from the basic class in the form of arrays in the API
    let newRequest = new XMLHttpRequest();

    newRequest.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=" + userId);
    // Convert output type from objects to string
    newRequest.responseType = "json"
    newRequest.send();

    newRequest.onload = function () {
        // Check the status number of the link in the postman
        if (newRequest.status >= 200 && newRequest.status < 300) {
            let posts = newRequest.response;
            // Empty items of their original content
            document.getElementById("posts").innerHTML = "";
            for (post of posts) {

                let content = `
                
                <div class="hesder_posts">
                        <h5>${post.title}</h5>
                        <h6>${post.body}</h6>
                </div>`
                document.getElementById("posts").innerHTML += content;

            }
        } else {
            alert("The operation was not completed");
        }
    }
}
// create function get of all posts end

// create function get of all users start
function GetUsers() {
    // Create an object from the basic class in the form of arrays in the API
    let newRequest = new XMLHttpRequest();

    newRequest.open("GET", "https://jsonplaceholder.typicode.com/users");
    // Convert output type from objects to string
    newRequest.responseType = "json"
    newRequest.send();

    newRequest.onload = function () {
        // Check the status number of the link in the postman
        if (newRequest.status >= 200 && newRequest.status < 300) {
            let users = newRequest.response;
            // Empty items of their original content
            document.getElementById("users").innerHTML = "";
            for (user of users) {
                let content = `
                <div id="button_user" onclick="userClicked(${user.id} , this)">
                    <a href="#posts">
                            <h3>${user.name}</h3>
                            <h3>${user.email}</h3>
                    </a>
                </div>`
                document.getElementById("users").innerHTML += content;
            }
        } else {
            alert("The operation was not completed");
        }
    }
}
// create function get of all users end

// create function click on only user to get One user's post start
function userClicked(id, el) {
    GetPosts(id);

    var selectedElements = document.getElementsByClassName("selected");
    for (element of selectedElements) {
        element.classList.remove("selected");
    }

    el.classList.add("selected");
}
// create function click on only user to get One user's post end

// Function keys start
GetUsers();
GetPosts(1);
// Function keys end