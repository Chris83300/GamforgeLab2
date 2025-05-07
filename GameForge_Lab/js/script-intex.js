        // fonction pour ajouter un paragraphe
        const conteneur = document.getElementById('conteneur');

        const btnAjouter = document.getElementById('bouton-ajouter');
        
        btnAjouter.addEventListener('click', () => {
            const nouveauParagraphe = document.createElement('p');
            nouveauParagraphe.textContent = "🎊 Nouveau paragraphe ajouté dynamiquement 🎊";
            conteneur.appendChild(nouveauParagraphe);
        });
        

        // fonction pour changer le titre
      const titrePrincipal = document.getElementById("titre");
      const btnChangeTitre = document.getElementById("changer-titre");

      const titreOriginal = titrePrincipal.textContent;
      const nouveauTitre= "Nouveau Titre ! 😀";

      let estTitreChange = false;

      btnChangeTitre.addEventListener('click', () => {
          if (estTitreChange) {
              titrePrincipal.textContent = titreOriginal;
          } else {
              titrePrincipal.textContent = nouveauTitre;
          }
          estTitreChange = !estTitreChange; // on inverse l'état
      });


        // Box au survol

const box1= document.querySelector('.box');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

box1.addEventListener('mouseover', () =>{
    box1.style.border = "solid 5px #FFA500 ";
    box1.style.transform = "scale(1.1)";
    box1.style.transition = "all 0.3s ease-in-out";
});

box1.addEventListener('mouseout', () => {
    box1.style.border = "solid 5px #ffffff ";
    box1.style.transform = "scale(1.0)";
    box1.style.transition = "all 0.3s ease-in-out";
});

box2.addEventListener('mouseover', () =>{
    box2.style.border = "solid 5px #FFA500 ";
    box2.style.transform = "scale(1.1)";
    box2.style.transition = "all 0.3s ease-in-out";
});

box2.addEventListener('mouseout', () => {
    box2.style.border = "solid 5px #ffffff ";
    box2.style.transform = "scale(1.0)";
    box2.style.transition = "all 0.3s ease-in-out";
});

box3.addEventListener('mouseover', () =>{
    box3.style.border = "solid 5px #FFA500 ";
    box3.style.transform = "scale(1.1)"
    box3.style.transition = "all 0.3s ease-in-out";
});

box3.addEventListener('mouseout', () => {
    box3.style.border = "solid 5px #ffffff ";
    box3.style.transform = "scale(1.0)"
    box3.style.transition = "all 0.3s ease-in-out";
});

// Obtenir le bouton remonter haut de page
let mybutton = document.getElementById("scrollToTopBtn");

// Quand l'utilisateur fait défiler la page de 20px vers le bas, montrer le bouton
window.onscroll = function() {scrollFunction()};

// Fonction pour gérer l'affichage du bouton en fonction du défilement de la page
function scrollFunction() {
  // Si l'utilisateur a fait défiler plus de 20 pixels vers le bas
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // Afficher le bouton
    mybutton.style.display = "block";
  } else {
    // Sinon, cacher le bouton
    mybutton.style.display = "none";
  }
}

// Quand l'utilisateur clique sur le bouton, remonter en haut de la page
mybutton.onclick = function() {
  // Défilement en douceur jusqu'en haut de la page
  window.scrollTo({top: 0, behavior: 'smooth'});
}
 