



function GetPosts(userId) {
    let newRequest = new XMLHttpRequest();

    newRequest.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+userId);
    newRequest.responseType = "json"
    newRequest.send();

    newRequest.onload = function () {
        if (newRequest.status >= 200 && newRequest.status < 300) {
            let posts = newRequest.response;
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

function GetUsers() {
    let newRequest = new XMLHttpRequest();

    newRequest.open("GET", "https://jsonplaceholder.typicode.com/users");
    newRequest.responseType = "json"
    newRequest.send();

    newRequest.onload = function () {
        if (newRequest.status >= 200 && newRequest.status < 300) {
            let users = newRequest.response;
            document.getElementById("users").innerHTML = "";
            for (user of users) {
                let content = `
                <div id="button_user" onclick="userClicked(${user.id} , this)">
                    <h3>${user.name}</h3>
                    <h3>${user.email}</h3>
                </div>`
                document.getElementById("users").innerHTML += content;
        }
        } else {
            alert("The operation was not completed");
        }
    }
}

function userClicked(id , el){
    GetPosts(id);

    var selectedElements = document.getElementsByClassName("selected");
    for(element of selectedElements){
        element.classList.remove("selected");
    }

    el.classList.add("selected");
}

GetUsers();
GetPosts(1);