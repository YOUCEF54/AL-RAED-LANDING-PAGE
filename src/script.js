var modal = document.getElementById("modal");

var btn = document.getElementById("btn");

var span = document.getElementById("close");


var backModal = document.getElementById("backModal");

btn.onclick = function() {
     backModal.style.display = "flex";
    setTimeout(()=> modal.style.height = "12rem"  , 100);

}


backModal.onclick = function() {
  modal.style.height = "0rem";
  setTimeout(()=>  backModal.style.display = "none"  , 100);

}

span.onclick = function() {
    modal.style.height = "0rem";
    setTimeout(()=>  backModal.style.display = "none"  , 400);

}

/////////////////////////////////////////////

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.width = "8%";
  }
}

