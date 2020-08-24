
var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");

var signUpBtn = document.getElementById("signUpBtn");
var signInBtn = document.getElementById("signInBtn");
var signUpLink = document.getElementById("signUpLink");

var closeSignUp = document.getElementById("closeSignUp");
var closeSignIn = document.getElementById("closeSignIn");

// open signUp and signIn modals on click of the respective buttons
signInBtn.addEventListener("click", () => openModal(signInModal));
signUpBtn.addEventListener("click", () => openModal(signUpModal));

// Close the modal on click of the close button
closeSignUp.addEventListener("click", () => closeModal(signUpModal));
closeSignIn.addEventListener("click", () => closeModal(signInModal));

//close the modal if the user clicks outside the modal
window.addEventListener("click", function(event) {
    if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    }
    if (event.target == signInModal) {
        signInModal.style.display = "none";
    }
});
// Open modal
openModal = modal => {
    modal.style.display = "block";
};
// Close modal
closeModal = modal => {
    modal.style.display = "none";
};
// on click of the signUp hyperlink inside sign in modal
signUpLink.onclick = function() {
    closeModal(signInModal);
    openModal(signUpModal);
};
