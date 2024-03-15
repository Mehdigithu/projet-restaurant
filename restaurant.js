let taille = document.querySelectorAll(".taille")

taille.forEach(taille => {
        


taille.addEventListener('mouseenter', function (event){taille.style.background='orange'})
taille.addEventListener('mouseleave', function (event){taille.style.background='transparent'})
});