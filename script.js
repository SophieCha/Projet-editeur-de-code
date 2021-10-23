//Définition de toutes les constantes qui pourront être appelées dans le JS

const editeur = document.querySelector("#editeur");
const livecoding = document.querySelector("#livecoding");
const gif = document.querySelector("img");
const selectButtonBold = document.querySelector("#bold");
const selectButtonItalic = document.querySelector("#italic");
const selectProgress = document.querySelector("#progress");

//Fonction qui permet d'afficher le nombre de caractère restant de la zone de texte et de l'afficher dans le compteur
function nombreCaracteres() {
  const compteur = document.querySelector("#compteur");
  compteur.innerHTML = 200 - editeur.textLength;
}

//Définition d'une fonction qui  permet d'avoir dans le paragraphe le contenu interprété de l'éditeur
editeur.addEventListener("keyup", function obtenirLivecoding() {
  livecoding.innerHTML = editeur.value;
  nombreCaracteres();
});

//création de 2 functions pour faire apparaître/ disparaître GIF

editeur.onkeyup = function invisible() {
  gif.style.visibility = "hidden";
};

editeur.onkeydown = function visible() {
  gif.style.visibility = "visible";
};

//fonction pour insérer balise bold

selectButtonBold.addEventListener("click", function baliseBold() {
  editeur.value += "<b></b>";
});

//fonction pour insérer balise italic
selectButtonItalic.addEventListener("click", function baliseItalic() {
  editeur.value += "<em></em>";
});

//Barre de chargement en utilisant la longueur de la valeur du contenu de l'éditeur
editeur.addEventListener("keyup", function progressBar() {
  let pourcentage = (editeur.textLength * 100) / 200;
  if (pourcentage < "35") {
    selectProgress.style.backgroundColor = "blue";
  } else {
    if (pourcentage < "75") {
      selectProgress.style.backgroundColor = "rgb(218, 167, 134)";
    } else {
      selectProgress.style.backgroundColor = "red";
    }
  }
  selectProgress.style.width = pourcentage + "%";
});
