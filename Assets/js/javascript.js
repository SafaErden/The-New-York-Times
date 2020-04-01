function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("header2").style.top = "0";
        document.getElementById("header1").style.top = "-50px";
    } else {
        document.getElementById("header2").style.top = "-50px";
        document.getElementById("header1").style.top = "0";
    }
  }