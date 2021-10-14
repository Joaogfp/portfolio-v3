//button menu//

function menubtn() {
  var x = document.getElementById("menur");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

//button menu//

//------------------//

//button to top//

buttontop = document.getElementById ("btnTop");

window.onscroll = function () {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    buttontop.style.display = "block";
  } else {
    buttontop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//button to top//

//-------------------------//

//modal//

var modal = document.getElementById ("modalC");

var btnM = document.getElementById ("btnmodl");

var btnC = document.getElementsByClassName ("closeButton")[0];

btnM.onclick = function() {
  modal.style.display = "block";
}

btnC.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (close) {
  if (close.target == modal) {
    modal.style.display = "none";
  }
}

//modal//

