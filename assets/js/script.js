


// cacher le modal
function hideModal() {
var modal = document.getElementById("myModal");
modal.style.display = "none";
}

/*var vLine1 = document.querySelector('.vertical-line1');
var vLine2 = document.querySelector('.vertical-line2');
//vLine1.style.height = '0%';
function startAnimation() {
  var lines = document.querySelectorAll('.line');
  //vLine1.forEach(function(line) {
    vLine1.style.height = '29vw';
    vLine2.style.height = '19.1vw'; // Définir la hauteur souhaitée pour l'animation
  //});
}
startAnimation();*/




// Réinitialisation des champs
function resetInputs() {
var inputs = document.getElementsByTagName('input');
var textareas = document.getElementsByTagName('textarea');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
}
textareas.value = '';
}

// Événement qui se déclenche lorsque la page est réactualisée
window.addEventListener('beforeunload', resetInputs);

const form = document.querySelector('form');
const modal = document.querySelector(".modal");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  modal.style.display = "block";
});