       // Récupère le modal
       var modal = document.getElementById("myModal");
       var modalImg = document.getElementById("img01");
       var captionText = document.getElementById("caption");
   
       // Récupère toutes les images de la galerie
       var images = document.querySelectorAll("#multimedia-galerie img");
   
       // Ajoute un événement click à chaque image
       images.forEach(function(img) {
           img.onclick = function() {
               modal.style.display = "block";
               modalImg.src = this.src;
               captionText.innerHTML = this.alt;
           }
       });
   
       // Récupère le bouton de fermeture
       var span = document.getElementsByClassName("close")[0];
   
       // Ferme le modal lorsqu'on clique sur le bouton
       span.onclick = function() {
           modal.style.display = "none";
       }

       const video = document.getElementById("ma-video");

if (video) {
  // Survol = lecture
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
  });
}
;


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