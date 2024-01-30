var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
    smoothScrollToTop();
  }
  
  function smoothScrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothScrollToTop);
      window.scrollTo(0, currentScroll - currentScroll / 8);
    }
  }
  
  function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth', block: 'start', inline: 'start' });
  }




  