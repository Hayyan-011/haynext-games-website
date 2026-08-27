// Current year
document.getElementById("year").textContent =
    new Date().getFullYear();


// Temporary download button
// Replace the "#" links in index.html with your real store URL.

document.querySelectorAll(".primary").forEach(function(button) {

    button.addEventListener("click", function(event) {

        if (button.getAttribute("href") === "#") {

            event.preventDefault();

            alert(
                "Add your Google Play or App Store link to this button before publishing."
            );

        }

    });

});