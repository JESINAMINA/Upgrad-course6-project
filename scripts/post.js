let count = 0;

function like_clicked() {
    count++;
    document.getElementById("like-summary").innerHTML =
        String(count) + " person likes this!";

    const text = document.getElementById("like-button").innerHTML;
    if (text.endsWith("e")) {
        document.getElementById("like-button").innerHTML += "d";
    }
}

function comment() {
    const commentText = document.getElementById("comment-area").value;
    if (commentText != null && commentText.trim().length != 0) {
        document.getElementById("comments-display-area").innerHTML =
            "<div class='comment'>" +
            commentText +
            "</div>" +
            document.getElementById("comments-display-area").innerHTML;
        document.getElementById("comment-area").value = "";
    }
}

function edit() {
    const postTitle = document.getElementById("post-title");
    const postContent = document.getElementById("post-content");

    postTitle.contentEditable = true;
    postContent.contentEditable = true;

    postTitle.style.border = "2px solid pink";
    postContent.style.border = "3px solid pink";

    document.getElementById("edit-button").style.display = "none";
    document.getElementById("save-button").style.display = "block";
}

function save() {
    const postTitle = document.getElementById("post-title");
    const postContent = document.getElementById("post-content");

    postTitle.contentEditable = false;
    postContent.contentEditable = false;

    postTitle.style.border = "none";
    postContent.style.border = "none";

    document.getElementById("edit-button").style.display = "block";
    document.getElementById("save-button").style.display = "none";
}