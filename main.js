window.addEventListener("scroll", function () {
  var Header = document.querySelector("header");
  Header.classList.toggle("sticky",window.scrollY > 500);

});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var mybutton = document.getElementById("back-top");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.classList.add("show"); 
  } else {
    mybutton.classList.remove("show");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


