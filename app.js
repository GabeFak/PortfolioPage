const scrollHeader = document.getElementById('scroll-hide');
const modal = document.getElementById('projects-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalTitleWrapper = document.getElementById("modal-title-wrapper");
const modalContents = document.querySelector(".modal-border");
const fadeInModalTextDelay = document.querySelector(".modal-discription");
const modalBackground = document.querySelector(".modal-background");
const headerLinks = document.querySelector(".header-links");
const burgerWrapper = document.querySelector(".burger-wrapper");
const toggle = document.getElementById('toggle');
const linkCloseNav = document.querySelector('.link-select');
const openMessageSentModal = document.getElementById('message-recived-modal');
const projectModalLink = document.getElementById('project-modal-link');
const projectModalLinkGit = document.getElementById('project-modal-link-git');

const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".latest-work-container .work-container");

let i = 0; // current slide
let j = 3; // total slides


let lastScrollTop = 0;
let ModalTitle = '';
let ModalText = '';
let ModalImage = '';
let ModalLink = '';
let ModalGHubLink = '';

function next(){

    document.getElementById("latest" + (i+1)).classList.remove("active");
    
    i = ( j + i + 1) % j;
    document.getElementById("latest" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}

function prev(){
    document.getElementById("latest" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("latest" + (i+1)).classList.add("active");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "#000";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#fff";
}

function dot(index){
    images.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("latest" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}

window.addEventListener("load", () => {
    if(window.innerWidth <= 757) {
        burgerWrapper.classList.remove('hide');
    }else{
        headerLinks.classList.remove('hide');
    };
    if(window.location.href === "http://127.0.0.1:5500/#to-contact-section-submited") {
        openMessageSentModal.classList.remove('hide');
    };
});

linkCloseNav.addEventListener('click', (e)=> {
    if(e.target.classList.contains('link-close-nav')) {
        toggle.checked = false;
        document.documentElement.style.setProperty('--colValBurger', 0);
    };
});

window.addEventListener('resize', function() {
	let viewport_width = window.innerWidth;
    checkNavSize(viewport_width);
});

const checkNavSize = (windowWidth) => {
    if(windowWidth <= 757) {
        if(!headerLinks.classList.contains('hide')) {
            headerLinks.classList.add('fade-out');
            headerLinks.classList.remove('fade-in');
            headerLinks.classList.add('hide');

            burgerWrapper.classList.remove('fade-out');
            burgerWrapper.classList.remove('hide');
            burgerWrapper.classList.add('fade-in');
        };
    };
    if(windowWidth >= 757) {
        if(headerLinks.classList.contains('hide')) {
            burgerWrapper.classList.add('fade-out');
            burgerWrapper.classList.remove('fade-in');
            burgerWrapper.classList.add('hide');
            
            headerLinks.classList.remove('fade-out');
            headerLinks.classList.remove('hide');
            headerLinks.classList.add('fade-in');
        };
    };
};

const closeModal = () => {
    fadeInModalTextDelay.classList.remove('classname2');
    modalContents.classList.remove("classname");
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal.classList.add('hide');
        modal.classList.remove('fade-out');
    }, 350);
};

modalBackground.addEventListener('click', (e) => { 
    if(e.target.classList.contains('modal-background')) {
        closeModal();
    };
});

document.querySelector('#close-project-modal').addEventListener('click', closeModal);

document.getElementById("close-message-recived-modal").addEventListener('click', () => {
    if(!openMessageSentModal.classList.contains('hide')) {
        openMessageSentModal.classList.add('hide');
    };
});

document.getElementById('toggle').addEventListener('change', (e)=> {
    let atTop = window.pageXOffset || document.documentElement.scrollTop;
    if(e.target.checked == true && atTop !== 0) {
        document.documentElement.style.setProperty('--colValBurger', 255);
    }else if(e.target.checked == false && atTop !== 0) {
        document.documentElement.style.setProperty('--colValBurger', 0);
    };
});

document.querySelector('#click-me').addEventListener('click', function(e) {
    switch(e.target.id) {
        case "latest1":
            ModalText = 'Quiz Host is quiz creation and hosting app. Its a MERN stack application which utilizes a custom made NodeJs API with a diverse set of user permisions and end points.';
            ModalTitle = 'Quiz Host';
            ModalImage = "./Images/portfoilioimage1.png";
            ModalLink = 'https://shielded-reef-57745.herokuapp.com/';
            ModalGHubLink = 'https://github.com/GabeFak/QHostClient';
            fillInModal();
            break;
        case "latest2":
            ModalText = 'A simple MERN stack \'Todo\' application where users can organize tasks in columns based on priority and access their data anywhere.';
            ModalTitle = 'Task Tracker';
            ModalImage = "./Images/portfoilioimage2alt.png";
            ModalLink = 'https://shielded-wildwood-60757.herokuapp.com';
            ModalGHubLink = 'https://github.com/GabeFak/priority-tracker2';
            fillInModal();
            break;
        case "latest3":
            ModalText = 'TeK_REsource was originally a small static music resourse archiving blog I made a few years ago. The project has been refactored into a single page React application as a small excersize. A custom API with admin privleges and an article template will be added in the future.';
            ModalTitle = 'TeK_REsource ';
            ModalImage = "./Images/P3Final.png";
            ModalLink = 'https://tekresourceblog.herokuapp.com';
            ModalGHubLink = 'https://github.com/GabeFak/TEKWRefactorWithReact';
            fillInModal();
            break;  
    };
    e.preventDefault();
});

function fillInModal() {
    [...modalTitle.childNodes].forEach(title => title.parentNode.removeChild(title));
    [...modalText.childNodes].forEach(modalText => modalText.parentNode.removeChild(modalText));
    //Deletes modal title and text

    if(document.querySelector(".modal-title").firstElementChild.classList.contains('modal-image')) {
        document.querySelector(".modal-title").firstElementChild.remove();
    };

    //checks if the first child of the modal-title div is an image so it can be deleted and overwriten 
    let titleTxt = document.createTextNode(ModalTitle);
    let modalInnerText = document.createTextNode(ModalText);
    projectModalLink.href = ModalLink;
    projectModalLinkGit.href = ModalGHubLink;
    modalTitle.appendChild(titleTxt);
    modalText.appendChild(modalInnerText);
    //adds new title and text

    let after = document.querySelector(".modal-discription");
    let img = document.createElement('img');
    let imageBefore = document.querySelector('.modal-title');
    //creates image and selects elements it will be placed inbetween

    img.classList.add('modal-image');
    img.src = ModalImage;
    img.width = '700';
    //adds atributes to image

    imageBefore.insertBefore(img, after);
    //inserts image into modal
    
    modal.classList.remove("hide"); 
    modalContents.classList.add('classname');
    fadeInModalTextDelay.classList.add('classname2');
    //allows modal to be seen
};

window.addEventListener("scroll", function(){
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        scrollHeader.style.top="-100px";
        document.documentElement.style.setProperty('--colVal', 0);
        document.documentElement.style.setProperty('--colValBurger', 0);
        document.documentElement.style.setProperty('--colValInv', 255);
    }else if (scrollTop === 0){
        scrollHeader.style.top="0px";
        document.documentElement.style.setProperty('--colVal', 255);
        document.documentElement.style.setProperty('--colValBurger', 255);
        document.documentElement.style.setProperty('--colValInv', 0);
    }else{
        scrollHeader.style.top="0";
    }
    lastScrollTop = scrollTop;
});

window.addEventListener("scroll", showOnScroll);
function showOnScroll() {
    let show = document.querySelectorAll('.show');
    for(let i = 0; i < show.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = show[i].getBoundingClientRect().top;
        let elementVisible = 250;
        if (elementTop < windowHeight - elementVisible) {
            show[i].classList.add("active");
        } 
        // else {
        //     show[i].classList.remove("active");
        // }
    };
};


