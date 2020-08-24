var createPostModal = document.getElementById("createPostModal");

var closeCreatePost = document.getElementById("closeCreatePost");
var createPostBtn = document.getElementById("createPostBtn");

//Opening and closing create post modal dialogue on click of cerate and close button respectively

createPostBtn.addEventListener("click", () => openModal(createPostModal));
closeCreatePost.addEventListener("click", () => closeModal(createPostModal));

window.addEventListener("click", function(event) {
    if (event.target == createPostModal) {
        createPostModal.style.display = "none";
    }
});
