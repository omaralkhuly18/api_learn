function GetPosts() {
    let newRequest = new XMLHttpRequest();

    newRequest.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=7");
    newRequest.responseType = "json"
    newRequest.send();

    newRequest.onload = function () {
        if (newRequest.status >= 200 && newRequest.status < 300) {
            let posts = newRequest.response;
            for (post of posts) {
                document.getElementById("content").innerHTML += `
                <tr>
                <td id="content_post_num">${post.id}</td>
                <td id="content_post_body">${post.body}</td>
                <td id="content_post_title">${post.title}</td>
                </tr>
                `;
                console.log(post.userId)
                //   alert("The modification process was completed successfully");
            }
        } else {
             alert("The operation was not completed");
        }
    }
}

GetPosts();

function createPosts() {
    let newRequest = new XMLHttpRequest();

    newRequest.open("POST", "https://jsonplaceholder.typicode.com/posts");
    newRequest.responseType = "json";
    newRequest.setRequestHeader("Content-type", "application/json");
    let bodyPost = `
    {
        "titel": "Omar Ramadan",
        "body": "hello Ahmed , I am want to play with you to",
        "userId": 15
    }
    `
    newRequest.send(bodyPost);
    newRequest.onload = function () {
        if (newRequest.status >= 200 && newRequest.status < 300) {
            let posts = newRequest.response;
            console.log(posts);
            console.log("the status code is =>" + newRequest.status);
           alert("The modification process was completed successfully");
        } else {
             alert("The operation was not completed");
        }

    }

}

// createPosts();

function updatePosts() {
    let updateRequest = new XMLHttpRequest();

    updateRequest.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");
    updateRequest.responseType = "json";
    updateRequest.setRequestHeader("Content-type", "application/json");
    let bodyPost = `
    {
        "title":"Omar Al-Kholy",
        "body": "hello Yusef , I am want to being with you to",
        "userId": 1
    }`
    updateRequest.send(bodyPost);
    updateRequest.onload = function () {
        if (updateRequest.status >= 200 && updateRequest.status < 300) {
            let updatepost = updateRequest.response;
            console.log(updatepost);
            console.log("the status code is =>" + updateRequest.status);
            alert("The modification process was completed successfully");
        } else {
           alert("The operation was not completed");
        }

    }

}

// updatePosts();

function deletPosts() {
    let updateRequest = new XMLHttpRequest();

    updateRequest.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
    updateRequest.responseType = "json";
    updateRequest.setRequestHeader("Content-type", "application/json");
    updateRequest.send();

    updateRequest.onload = function () {
        if (updateRequest.status >= 200 && updateRequest.status < 300) {
            let updatepost = updateRequest.response;
            console.log(updatepost);
            console.log("the status code is =>" + updateRequest.status);
            alert("The deletion  was completed successfully");
        } else {
           alert("The operation was not completed");
        }

    }

}

// deletPosts();