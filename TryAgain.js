let ham = document.querySelector(".ham");
let cross = document.querySelector(".cross");
ham.addEventListener('click', () => {

    document.querySelector(".second-nav-ul").style.marginTop = "80px";
    ham.style.display = "none";
    cross.style.display = "block";
})
cross.addEventListener('click', () => {

    document.querySelector(".second-nav-ul").style.marginTop = "-1000px";
    cross.style.display = "none";
    ham.style.display = "block";
})

