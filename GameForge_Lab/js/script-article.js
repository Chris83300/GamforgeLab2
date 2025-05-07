// fonction pour afficher plus ou moins
function toggleArticle(button) {
  const collapsible = button.previousElementSibling; // recupère le collapsible

  collapsible.classList.toggle("expanded"); // ajoute ou retire la classe expanded

  if (collapsible.classList.contains("expanded")) { // si le collapsible est ouvert
    button.textContent = "Afficher moins"; // change le texte du bouton
  } else {
    button.textContent = "Afficher plus"; // change le texte du bouton
  }
}

// fonction pour rechercher un article
const input = document.getElementById("searchInput"); // recupère l'input
const articles = document.querySelectorAll(".article"); // recupère tous les articles

input.addEventListener("keyup", function(){ // ecoute l'input
  const filter = input.value.toLowerCase(); // recupère la valeur de l'input

  articles.forEach(article => { // parcourt tous les articles
    const text = article.textContent.toLowerCase(); // recupère le texte de l'article
    article.style.display = text.includes(filter) ? "block" : "none"; // affiche ou masque l'article
  });
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