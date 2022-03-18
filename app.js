const scrollHeader = document.getElementById('scroll-hide');
const modal = document.getElementById('projects-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalTitleWrapper = document.getElementById("modal-title-wrapper");
const modalContents = document.querySelector(".modal-border");
const fadeInModalTextDelay = document.querySelector(".modal-discription");
const headerLinks = document.querySelector(".header-links");
const burgerWrapper = document.querySelector(".burger-wrapper");
const toggle = document.getElementById('toggle');
const linkCloseNav = document.querySelector('.link-select');
const openMessageSentModal = document.getElementById('message-recived-modal');
const projectModalLink = document.getElementById('project-modal-link');

let lastScrollTop = 0;
let ModalTitle = '';
let ModalText = '';
let ModalImage = '';
let ModalLink = '';

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
}

document.querySelector('#close-project-modal').addEventListener('click', () => {
    fadeInModalTextDelay.classList.remove('classname2');
    modalContents.classList.remove("classname");
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal.classList.add('hide');
        modal.classList.remove('fade-out');
    }, 350);
    //hides modal upon pressing cancel
});

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
            ModalText = 'QuizTime is a full MERN stack application that utilizes NodeJs to create a backend with multiple end points and a diverse set of user permisions. Better interface comming soon!';
            ModalTitle = 'QuizTime';
            ModalImage = "./Images/P1Final.png";
            ModalLink = '#';
            fillInModal();
            break;
        case "latest2":
            ModalText = 'This site right here! Its only a place holder for another project comming soon.';
            ModalTitle = 'This site :P';
            ModalImage = "./Images/P2Final.png";
            ModalLink = '#';
            fillInModal();
            break;
        case "latest3":
            ModalText = 'TeK_REsource is a small project built using react. The purpose of the project is to be an archive of archives for any electronic music related content.';
            ModalTitle = 'TeK_REsource ';
            ModalImage = "./Images/P3Final.png";
            ModalLink = '#';
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
}

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
}


