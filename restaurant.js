let taille = document.querySelectorAll(".taille")

taille.forEach(taille => {
        


taille.addEventListener('mouseenter', function (event){taille.style.background='orange'})
taille.addEventListener('mouseleave', function (event){taille.style.background='transparent'})
});



function filterNumbers(event) {
    let saisie = event.target.value;// saisie = a
    

    saisie= saisie.replace(/[^0-9]/g, ''); // saisie=a.replace par ''=('') 
    // saisie=5

    event.target.value = saisie;// champs de saisie =''
   // event.target.value =5
}
let reserver=document.querySelector('#reserver')
reserver.addEventListener('mouseenter',function(event){reserver.style.color='black'})
reserver.addEventListener('mouseleave',function(event){reserver.style.color='white'})