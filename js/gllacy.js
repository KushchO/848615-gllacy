
var feedbackLink = document.querySelector(".contacts-feedback-button");
var feedbackPopup = document.querySelector(".main-feedback");
var feedbackClose = document.querySelector(".feedback-close");

var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var nameField = feedbackPopup.querySelector("[name=feedback-form-name]");
var emailField = feedbackPopup.querySelector("[name=feedback-form-email]");
var textField = feedbackPopup.querySelector("[name=feedback-form-message]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


if(feedbackLink!== null){
feedbackLink.addEventListener("click", function(ev){
  ev.preventDefault();
  feedbackPopup.classList.add("modal-show");
  if (storageEmail && storageName) {
    nameField.value = storageName;
    emailField.value = storageEmail;
    textField.focus();
  }else {
      if (storageName) {
        nameField.value = storageName;
        emailField.focus();
      } else {
        nameField.focus();
        }
    }

});
}

if(feedbackClose!== null){
feedbackClose.addEventListener("click", function(ev){
  ev.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});
}



feedbackForm.addEventListener("submit", function(ev){
  if(!nameField.value || !textField.value || !emailField.value) {
    ev.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
      if (isStorageSupport) {
  localStorage.setItem("name", nameField.value);
  localStorage.setItem("email", emailField.value);
      }
    }
});

window.addEventListener("keydown", function(ev){
  if(ev.keyCode == 27) {
    ev.preventDefault();
    if(feedbackPopup.classList.contains("modal-show")){
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});

