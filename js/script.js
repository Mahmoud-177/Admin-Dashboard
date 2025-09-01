const user = document.querySelector(".user")
const userMenu = document.getElementById("userMenu")
const arr = document.querySelector(".arr")

user.addEventListener("click", _ => {
    userMenu.classList.toggle("active")
    arr.classList.toggle("flipped")
})