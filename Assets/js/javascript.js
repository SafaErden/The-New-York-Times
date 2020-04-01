window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("header1").style.display = "none";
        document.getElementById("header2").style.display = "block";
    } else {
        document.getElementById("header1").style.display = "block";
        document.getElementById("header2").style.display = "none";
    }
  }