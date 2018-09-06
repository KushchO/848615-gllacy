
var feedbackLink = document.querySelector(".contacts-feedback-button");
var feedbackPopup = document.querySelector(".main-feedback");
var feedbackClose = document.querySelector(".feedback-close");




if(feedbackLink!== null){
feedbackLink.addEventListener("click", function(evt){
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
});
}

if(feedbackClose!== null){
feedbackClose.addEventListener("click", function(evt){
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
});
}




