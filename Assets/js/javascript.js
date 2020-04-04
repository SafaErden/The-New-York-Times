window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("header1").style.display = "none";
        document.getElementById("header2").style.display = "block";
    } else {
        document.getElementById("header1").style.display = "block";
        document.getElementById("header2").style.display = "none";
    }
  }