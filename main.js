document.addEventListener("DOMContentLoaded", function() {
    const inputFields = document.querySelectorAll(".input-container input, .input-container textarea");

    inputFields.forEach(function(input) {
        input.addEventListener("input", function() {
            if (this.value !== "") {
                this.removeAttribute("placeholder");
            } else {
                this.setAttribute("placeholder", this.getAttribute("data-placeholder"));
            }
        });

        input.addEventListener("focus", function() {
            if (this.value === "") {
                this.setAttribute("data-placeholder", this.getAttribute("placeholder"));
                this.removeAttribute("placeholder");
            }
        });

        input.addEventListener("blur", function() {
            if (this.value === "") {
                this.setAttribute("placeholder", this.getAttribute("data-placeholder"));
                this.removeAttribute("data-placeholder");
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector(".menu")
    const liens = document.querySelector(".liens")
    const MediaWidth = window.matchMedia("(max-width: 830px)")

    window.addEventListener('resize',()=>{
        if (MediaWidth.matches) {
            liens.style.display = "none";
            menu.addEventListener('click',()=>{
                if (liens.style.display === "block") {
                    liens.style.display = "none";
                  }
                    else {
                        liens.style.display = "block";
                    }
            })
    }
    else{
        liens.style.display = "block";
    }
    })


  });
  