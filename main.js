var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";

}

function closemenu() {
    sidemenu.style.right = "-200px";

}
src = "https://cdn.jsdelivr.net/npm/typed.js@2.0.12"
var typingEffect = new Typed(".multiText", {
    strings: ["Web-Developer", "Java-Developer", "Nodejs-Developer", "Coder", "Web-developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})

var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    loader.style.display = "none";

})

const scriptURL = 'https://script.google.com/macros/s/AKfycbxfRQgSZgZOzRXe59HFrlZh_4icFDyJzVPmdduBlYgyoRQ0VBqrVyCWE6QkegCrJwoZ/exec'
const form = document.forms['submit-to-google-sheet']
constmsg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function() {
                msg.innerTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.ClassName
    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach((eL) => {
    el.addEventListener('click', toggleSkills)
})