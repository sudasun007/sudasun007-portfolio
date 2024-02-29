var typed= new Typed(".text", {
    strings: ["Web Developer" , "YouTuber" , "Frontend Developer" , "Content Creator" , "Singer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});


function loadContent(page, targetId) {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                document.getElementById(targetId).innerHTML = this.responseText;
            } else {
                console.error("Failed to load content:", this.status, this.statusText);
            }
        }
    };
    
    xhttp.open("GET", page, true);
    xhttp.send();
}

function animateRadialBars() {
    var radialBars = document.querySelectorAll('.radial-bar');

    radialBars.forEach(function(radialBar) {
        var percentage = radialBar.getAttribute('data-percentage');
        var progressBar = radialBar.querySelector('.progress-bar');

        
        var color = calculateColor(percentage);

        
        progressBar.style.stroke = 'cyan';
        var offset = 502 - (percentage * 502) / 100;
        progressBar.style.strokeDashoffset = offset;
    });
}

function calculateColor(percentage) {
    
    var hue = (1 - percentage / 100) * 120; 
    return `hsl(${hue}, 100%, 50%)`;
}


document.addEventListener("DOMContentLoaded", function () {
    
    var imageSources = [
        "images/img1.jpg",
        "images/img2.jpg",
        "images/img3.jpg",
        "images/img4.jpg"
    ];

    var currentImageIndex = 0;
    var slideshowInterval;

    function startSlideshow() {
        slideshowInterval = setInterval(showNextImage, 3000); 
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % imageSources.length;
        updateImage();
    }

    function updateImage() {
        var imageElement = document.getElementById("slideshowImage");
        imageElement.src = imageSources[currentImageIndex];
    }

    function stopSlideshow() {
        clearInterval(slideshowInterval);
    }

    
    startSlideshow();


    var slideshowContainer = document.getElementById("slideshowContainer");
    slideshowContainer.addEventListener("mouseover", stopSlideshow);
    slideshowContainer.addEventListener("mouseout", startSlideshow);
});
