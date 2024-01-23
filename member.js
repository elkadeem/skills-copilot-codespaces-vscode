function skillsMember() {
    var x = document.getElementById("skillsMember");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("skillsMember").style.display = "block";
      document.getElementById("skillsMember").style.marginLeft = "auto";
      document.getElementById("skillsMember").style.marginRight = "auto";
      document.getElementById("skillsMember").style.width = "50%";
      document.getElementById("skillsMember").style.padding = "10px";
      document.getElementById("skillsMember").style.border = "2px solid #000000";
      document.getElementById("skillsMember").style.borderRadius = "10px";
    } else {
      x.style.display = "none";
    }
  }

  