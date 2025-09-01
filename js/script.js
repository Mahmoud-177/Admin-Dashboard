const user = document.querySelector(".user")
const userMenu = document.getElementById("userMenu")
const arr = document.querySelector(".arr")

user.addEventListener("click", _ => {
    userMenu.classList.toggle("active")
    arr.classList.toggle("flipped")
})

const elements = document.querySelectorAll(".fade-in")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("in-active")
        }
    })
}, {
    threshold: 0.1
})

elements.forEach((el) => observer.observe(el))