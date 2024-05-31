document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".button-ds4, .button-cont");
    buttons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = this.getAttribute("href");
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
