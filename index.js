// 1. API Url
const url = "https://jsonplaceholder.typicode.com/users";

// 2. Fetch users from the API Url
function fetchUsers(){
    // 2.1 Make use of the browser fetch API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
          // 2.2 Passing the user data to the renderUsers function
        renderUsers(data);
    });
}

// 3. Render the users in the DOM
function renderUsers(usersData) {
    console.log(usersData);
    const ul = document.getElementById("user-list-container");
    console.log(ul);

    // 3.1 Render an li tag for each of the users
    usersData.forEach((user, index) =>{
        console.log(user, index + 1);
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${index + 1}.</span>
         <span>${user.name}</span>
         <span>-</span>
         <span class="username">${user.username}</span>
        `;

        // 3.2 Append the current use li tag to the Ul tag
         ul.appendChild(li);

    });
}

// 4. Add a search function to the DO
function searchUsersByUsername(){
    const input = document.getElementById("search");
    const ul = document.getElementById("user-list-container");
    const inputValue = input.value.toUpperCase();
    const usersList = ul.querySelectorAll("li"); // Array of all li tags[]
    
    // Loop through all the users and render the ones theat match the search
for (let index = 0; index < usersList.length; index++) {
    const usernameSpanTag = usersList[index].querySelector(".username");
    const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
    const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

    if (isMatch){
        usersList[index].style.display = "Block";
    } else {
        usersList[index].style.display = "none";
     }
    }
}

//5. Calling the fetch function
fetchUsers();