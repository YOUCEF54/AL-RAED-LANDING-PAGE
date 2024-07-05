// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

var backModal = document.getElementById("backModal");

// When the user clicks on the button, open the modal
btn.onclick = function() {
     backModal.style.display = "flex";
    setTimeout(()=> modal.style.height = "12rem"  , 100);

}


backModal.onclick = function() {
  modal.style.height = "0rem";
  setTimeout(()=>  backModal.style.display = "none"  , 100);

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.height = "0rem";
    setTimeout(()=>  backModal.style.display = "none"  , 400);

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.width = "8%";
  }
}

