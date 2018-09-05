var searchLink = document.querySelector(".search-form-link");
var searchPopup = document.querySelector(".search-form-wrapper");

var authLink = document.querySelector(".authorization-form-link");
var authPopup = document.querySelector(".form-authorization-wrapper");

var feedbackLink = document.querySelector(".contacts-feedback-button");
var feedbackPopup = document.querySelector(".main-feedback");
var feedbackClose = document.querySelector(".feedback-close");


var cartPopup = document.querySelector(".cart-popup");
var cartLink = document.querySelector(".cart-with-goods");

var selectSort = document.querySelector(".sort-filter-select");
var iconSelect = document.querySelector(".select-icon-fill");
var selectLabel = document.querySelector(".sort-filter-select-label");

searchLink.addEventListener("click", function(evt){
  evt.preventDefault();
  searchPopup.classList.toggle("modal-show");
});

authLink.addEventListener("click", function(evt){
  evt.preventDefault();
  authPopup.classList.toggle("modal-show");
});


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

cartLink.addEventListener("click", function(evt){
  evt.preventDefault();
  cartPopup.classList.toggle("modal-show");
});

selectSort.addEventListener("mouseout", function(evt){
  evt.preventDefault();
  iconSelect.classList.remove("black-fill");
});

selectSort.addEventListener("mouseover", function(evt){
  evt.preventDefault();
  iconSelect.classList.add("black-fill");
});

selectLabel.addEventListener("mouseover", function(evt){
  evt.preventDefault();
  iconSelect.classList.add("black-fill");
});

selectLabel.addEventListener("mouseout", function(evt){
  evt.preventDefault();
  iconSelect.classList.remove("black-fill");
});

iconSelect.addEventListener("mouseover", function(evt){
  evt.preventDefault();
  selectSort.classList.add("select-black");
});

iconSelect.addEventListener("mouseout", function(evt){
  evt.preventDefault();
  selectSort.classList.remove("select-black");
});
