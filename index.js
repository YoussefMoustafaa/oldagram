import { posts } from "./data.js"

const mainEl = document.getElementById("main-el")

let num = 1


for (let post of posts) {
    
    appendPosts(post)
}


function appendPosts(post) {
    
    let postSection = document.createElement("section")

    
    postSection.innerHTML = 
    `
        <div class="post-header">
            <img src="${post.avatar}" class="user-avatar" alt="van gogh avatar">
            <div>
                <p class="name">${post.name}</p>
                <p class="location">${post.location}</p>
            </div>
        </div>
        <img src="${post.post}" class="post-img" alt="van gogh post">
        <div class="icons-list">
        <img src="images/icon-heart.png" class="icon heart-icon" alt="heart icon" id="heart-btn${num}">
        <img src="images/icon-comment.png" class="icon" alt="comment icon">
        <img src="images/icon-dm.png" class="icon" alt="dm icon">
        </div>
        <p class="likes-number" id="likes-number${num}">${post.likes} likes</p>
        <p class="caption"><span class="username">${post.username}</span>  ${post.comment}</p>
    `
        
    postSection.addEventListener("click", function(event) {
        if (event.target.id) {
            document.getElementById(event.target.id).setAttribute("src", "images/icons-red-heart-96-asli.png")
            post.likes++
            console.log(post.likes)
        }
    })

    num++

    mainEl.append(postSection)

}


