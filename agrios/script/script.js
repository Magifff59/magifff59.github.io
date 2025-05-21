const burgerMenu = document.querySelector('.burger-menu');
const navbar = document.querySelector('.navbar');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    navbar.classList.toggle('active');
});

const modal = document.getElementById("contactModal");
const contactButton = document.getElementById("contactButton");
const closeBtn = document.querySelector(".modal .close");

contactButton.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const projectData = [
        { image: '../img/master-news4.png', text: 'Легке збирання' },
        { image: '../img/master-news5.png', text: 'Сільське фермерство' },
        { image: '../img/master-news6.png', text: 'Екологічні ферми' },
        { image: '../img/master-news7.png', text: 'Органічні розчини' },
        { image: '../img/master-news8.png', text: 'Свіжі продукти' },
        { image: '../img/master-news9.png', text: 'Здорова їжа' }
    ];

    const swiperWrapper = document.getElementById('swiper-wrapper');

    projectData.forEach(project => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide', 'project-card-swiper');

        const projectImage = document.createElement('div');
        projectImage.classList.add('project-image-swiper');
        projectImage.style.backgroundImage = `url('${project.image}')`;

        const projectText = document.createElement('span');
        projectText.classList.add('project-text-swiper');
        projectText.innerHTML = project.text;

        projectImage.appendChild(projectText);
        slide.appendChild(projectImage);
        swiperWrapper.appendChild(slide);
    });

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: false,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            }
        },
    });
});