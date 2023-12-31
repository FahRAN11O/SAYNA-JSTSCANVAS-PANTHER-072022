

// zoomer images
$("#tchalla").on({
    mouseenter: function() {
        $(this).animate({ width: '+=10%', });
    },
    mouseleave: function() {
        $(this).animate({ width: '-=10%', });
    },
});

$("#pantherhome6").on({
    mouseenter: function() {
        $(this).animate({ width: '+=20%', });
    },
    mouseleave: function() {
        $(this).animate({ width: '-=20%', });
    },
});

// personnages
let personnages = [
    {
      'image': {
        'src': './assets/images/Accueil/Pantherhome_slider_1.png'
      },
      'title': 'KILLMONGER',
      'text': "La sauvagerie de N'Jadaka alors qu'il servait dans une unité d'opérations noires de l'armée américaine lui a valu le surnom de Killmonger. D’origine Wakandaise, et se sentant abandoné par sa nation, il cherche à détroner T’Challa dans une quête vers le pourvoir."
    },
    {
      'image': {
        'src': './assets/images/Accueil/Pantherhome_slider_2.png'
      },
      'title': 'OKOYE',
      'text': "Okoye est le général des Dora Milaje (groupe d’élite de femmes guerrières) et le chef des forces armées et des renseignements wakandais. Témoin du couronnement de T'Challa, elle se joint à lui dans de nombreuses aventures."
    },
    {
      'image': {
        'src': './assets/images/Accueil/Pantherhome_slider_3.png'
      },
      'title': 'SHURI',
      'text': "Shuri est la Princesse du Wakanda, la fille de T'Chaka et de Ramonda, la sœur de T'Challa et la leader du Groupe de Design du Wakanda. Innovatrice, elle est chargée de créer une grande partie de la technologie moderne du Wakanda ainsi que les Habits de la Panthère."
    },
    {
      'image': {
        'src': './assets/images/Accueil/Pantherhome_slider_4.png'
      },
      'title': 'NAKIA',
      'text': "Nakia est une membre des Chiens de Guerre et l'amoureuse de T'Challa. Elle est souvent en mission à travers le monde, assistant aux grandes détresses de nombreux peuples et commence à croire avec force que le Wakanda pourrait activement les aider."
    },
    {
      'image': {
        'src': './assets/images/Accueil/Pantherhome_slider_5.png'
      },
      'title': 'RAMONDA',
      'text': "Ramonda est la Reine Mère du Wakanda, épouse de T'Chaka et mère de T'Challa et Shuri. Elle se tenait aux côtés de son fils quand il devint le Roi du Wakanda, mais fut forcée de partir en exil lorsque Erik Killmonger vainquit T'Challa et prit le contrôle du trône."
    },
    {
      'image': {
        'src': './assets/images/Accueil/Pantherhome_slider_6.png'
      },
      'title': 'W’kabi',
      'text': "W'Kabi est l'ancien chef de la sécurité pour la Tribu de la Porte du Wakanda ainsi que l'ancien meilleur ami de T'Challa. Ayant perdu la foi en son roi pour avoir échouer à capturer Ulysses Klaue, l'homme responsable de la mort de ses parents, W'Kabi apporta son soutien à Erik Killmonger et lui permit de prendre le trône du Wakanda."
    },
    {
      'image': {
        'src': './assets/images/Accueil/Pantherhome_slider_7.png'
      },
      'title': 'm’baku',
      'text': "M'Baku est le chef de la Tribu Jabari, un groupe de Wakandais qui s'étaient écartés de la société principale du Wakanda et un fervant opposant du pouvoir de T'Challa, mais échoua à le vaincre lors de l'affrontement rituel pour le trône, avant de l'aider à défendre le Wakanda face à Erik Killmonger."
    },
    {
      'image': {
        'src': './assets/images/Accueil/Pantherhome_slider_8.png'
      },
      'title': 'ZURI',
      'text': "Zuri était un ancien membre des Chiens de Guerre et un shaman Wakandais, loyal conseiller de son Roi. Après avoir gardé les secrets de T'Chaka à propos de sa gestion de la mort de N'Jobu dans le passé, Zuri continua à soutenir le Roi du Wakanda alors que T'Challa reprenait le trône."
    },
    {
      'image': {
        'src': './assets/images/Accueil/Pantherhome_slider_9.png'
      },
      'title': 'EVERETT KENNETH',
      'text': "L'Agent Everett Ross est un agent de la CIA et un ancien Commissaire Exécutif à l'Antiterrorisme pour la Force Conjointe AntiTerroriste. Après avoir quitté la Force Conjointe AntiTerroriste, Ross fut chargé de traquer et neutraliser Ulysses Klaue, ce qui plaça Ross sur le chemin de Black Panther, qui cherchait à capturer de nouveau Klaue pour ses crimes passés."
    },
    {
      'image': {
        'src': './assets/images/Accueil/Pantherhome_slider_10.png'
      },
      'title': 'ULYSSE KLAUE',
      'text': "Ulysses Klaue est un criminel international, gangster et vendeur d'armes sur le marché noir. En 1992, il collabora avec N'Jobu afin de voler une quantité importante de vibranium au Wakanda. Bien qu'il soit parvenu à voler et à s'échapper avec un stock important, il reçut une marque sur le cou de la part des Wakandais."
    }
];

// let nextSlide = document.getElementById('nextSlide');
// let divImg1 = document.getElementById("divImg1");

// nextSlide.addEventListener('click', ()=>{


// for(let i=0; i<=personnages.length; i++){
//     divImg1.setAttribute('src', personnages[i].image.src);
// }

 
// });
//   $('.title').html(personnages[0].title);

let nextSlide = document.getElementById('nextSlide'); //bouton suivant

let divImg1 = document.getElementById('divImg1'); 
let divImg2 = document.getElementById('divImg2');
let divImg3 = document.getElementById('divImg3');
let bio1 = document.getElementById('bio1');
let bio2 = document.getElementById('bio2');

let divTitle1 = document.getElementById('divTitle1');
let divTitle2 = document.getElementById('divTitle2');


var div = document.getElementById('myDiv');

let currentIndex = 0; 

var formulaire = document.querySelector('.mon-formulaire');

formulaire.addEventListener('submit', (event) => {
  modal.style.display ='flex';
  $('#titre-popup').text("Merci pour votre demande d'intervention!");
  //Boutton Enigme suivant
  boutonModal.innerHTML="Fermer";

  //evenenement correspondant avec le bouton
  boutonModal.addEventListener('click',(event) => {
      modal.style.display ='none';      
  })


})



nextSlide.addEventListener('click', () => {
    // pour les images
    
    divImg1.setAttribute('src', personnages[currentIndex].image.src);
    divImg2.setAttribute('src', personnages[(currentIndex + 1) % personnages.length].image.src);
    divImg3.setAttribute('src', personnages[(currentIndex + 2) % personnages.length].image.src);
    // pour le texte
    divTitle1.innerHTML = personnages[currentIndex].title;
    divTitle2.innerHTML = personnages[(currentIndex+ 1) % personnages.length].title;
    bio1.innerHTML = personnages[currentIndex].text;
    bio2.innerHTML = personnages[(currentIndex+ 1) % personnages.length].text;
    currentIndex = (currentIndex + 1) % personnages.length;

    // animation 
});

//Image slide automatique
function slideAuto() {
  divImg1.setAttribute('src', personnages[currentIndex].image.src);
    divImg2.setAttribute('src', personnages[(currentIndex + 1) % personnages.length].image.src);
    divImg3.setAttribute('src', personnages[(currentIndex + 2) % personnages.length].image.src);
    // pour le texte
    divTitle1.innerHTML = personnages[currentIndex].title;
    divTitle2.innerHTML = personnages[(currentIndex+ 1) % personnages.length].title;
    bio1.innerHTML = personnages[currentIndex].text;
    bio2.innerHTML = personnages[(currentIndex+ 1) % personnages.length].text;
    currentIndex = (currentIndex + 1) % personnages.length;
}

//Slide automatique /4s
setInterval(slideAuto, 4000);


