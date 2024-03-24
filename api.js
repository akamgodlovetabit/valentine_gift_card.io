'use strict'
document.addEventListener('DOMContentLoaded', function() {
    var url = window.location.href;
    var message = "Check out this awesome website: ";
    var whatsappUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(message + url);
    var whatsappButton = document.getElementById('whatsapp-button');

    if (whatsappButton) {
        whatsappButton.href = whatsappUrl;

        var lastClickTime = 0; // For throttling clicks

        whatsappButton.addEventListener('click', function(event) {
            var currentTime = new Date().getTime();
            if (currentTime - lastClickTime < 1000) { // Throttle clicks to once per second
                event.preventDefault();
                return;
            }
            lastClickTime = currentTime;

            // Confirm before sharing
            if (!confirm("Do you want to share this URL on WhatsApp?")) {
                event.preventDefault();
                return;
            }

            var clickCount = sessionStorage.getItem('clickCount');
            if (clickCount) {
                clickCount = Number(clickCount) + 1;
            } else {
                clickCount = 1;
            }
            sessionStorage.setItem('clickCount', clickCount);
            console.log("WhatsApp button has been clicked " + clickCount + " times.");

            // Add your analytics tracking code here
            // For example: ga('send', 'event', 'WhatsApp Button', 'click');
        });

        // Check if the button is visible on the screen
        var observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                console.log("WhatsApp button is visible.");
                // Add your code to handle the button becoming visible
            } else {
                console.log("WhatsApp button is not visible.");
                // Add your code to handle the button becoming invisible
            }
        }, {});
        observer.observe(whatsappButton);
    } else {
        console.error("Element with id 'whatsapp-button' not found.");
    }
});
