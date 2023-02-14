let navbar = document.querySelector(".navbar");
document.querySelector('#menu-btn').onclick = () =>  {
    
    navbar.classList.toggle("active");
};

document.querySelectorAll(".about .video-container .control-btn").forEach(btn => {
    btn.onclick = () => {
        let source = btn.getAttribute('data-src');

        document.querySelector(".about .video-container .video").src = source;
    }
});

AOS.init({
    duration: 800,
    offset: 150,
});