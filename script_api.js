// create function get of all posts start
function GetPosts(userId) {
    // Create an object from the basic class in the form of arrays in the API
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    .then( response => {
        if(response.ok){
            return response.json()
        }
    })
    .then( thisPosts => {
        document.getElementById("thisPosts").innerHTML = "";
        for (post of thisPosts) {

            let content = `
            
            <div class="hesder_posts">
                    <h5>${post.title}</h5>
                    <h6>${post.body}</h6>
            </div>`
            document.getElementById("thisPosts").innerHTML += content;
        }
    });
    // Empty items of their original content

}
// create function get of all posts end

// create function get of all users start
function GetUsers() {
    // Create an object from the basic class in the form of arrays in the API
    return new Promise((resolve , reject)=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => {
        if(response.ok){
            return response.json()
        }else{
            reject("error with users request");
        }
    })
    .then( users => {
        document.getElementById("users").innerHTML = "";
        for (user of users) {
            let content = `
            <div id="button_user" onclick="userClicked(${user.id} , this)">
                <a href="#thisPosts">
                        <h3>${user.name}</h3>
                        <h3>${user.email}</h3>
                </a>
            </div>`
            document.getElementById("users").innerHTML += content;
        }
        resolve();
    });
    })

}

// create function get of all users end

// Function keys start
GetUsers()
.then(()=>{
    GetPosts(1);
})
.catch((error) =>{
    console.log(error)
})


// Function keys end

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

