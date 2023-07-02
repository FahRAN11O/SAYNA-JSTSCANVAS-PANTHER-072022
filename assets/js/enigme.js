
/*let enigmes = [{
    "text": "Prouve ton talent d’espion et déchiffre cette réplique d’Okoyé écrite en Wakandais, et apprend par la même occasion la première valeur d’ une Dora Milaje!",
    "enigme": " <span class='panthera-letter'>SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS </span>",
    "reponse": "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS",
    "note": "<p>Voici la transicription de l’alphabet :</p> <p class='alphabet> A = < span > A < /span> ; B = <span> B </span > ;C = < span > C < /span> ; D = <span> D </span > ;E = < span > E < /span> ; F = <span> F </span > ;G = < span > G < /span> ; H = <span> H </span > ;I = < span > I < /span> ; J = <span> J </span > ;K = < span > K < /span> ; L = <span> L </span > ;M = < span > M < /span> ; N = <span> N </span > ;O = < span > O < /span> ; P = <span> P </span > ;Q = < span > Q < /span> ; R = <span> R </span > ;S = < span > S < /span> ; T =<span> T </span > ;U = < span > U < /span> ; W = <span> W </span > ;X = < span > X < /span> ; Y = <span> Y </span > ;Z = < span > Z < /span> </p > "
},
{
    "text": "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
    "enigme": "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
    "reponse": "1",
    "note": "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E.En pourcentage de fréquence, la lettre est utilisée à 14 % dans une phrase.Et si tu regardais quel symbole revient le plus souvent ? "
},
{
    "text": "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
    "enigme": "01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010",
    "reponse": "1",
    "note": "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. Cest en quelque sorte lancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1."
}
];*/




    let enigmes= [
      {
        "numero": 1,
        "description": "Prouve ton talent d'espion et déchiffre cette réplique d’Okoyé écrite en Wakandais,<br> et apprend par la même occasion la première valeur d’une Dora Milaje ",
        "titre_note":"Voici la transicription de l’alphabet",
        "note": "<span>A</span> = A ; <span>B</span> = b ; <span>C</span> = c ; <span>D</span> = d ; <span>E</span> = e ; <span>F</span> = f ; <span>G</span> = g ; <span>H</span> = h ; <span>I</span> = i ; <span>J</span> = j ; <span>K</span> = k ; <span>L</span> = l ; <span>M</span> = m ; <span>N</span> = n ; <span>O</span> = o ; <span>P</span> = p ; <span>Q</span> = q ; <span>R</span> = r ; <span>S</span> = s ; <span>T</span> = t ;<span>U</span> = u ; <span>W</span> = w ; <span>X</span> = x ; <span>Y</span> = y ; <span>Z</span> = z",
        "enigme": "\"SI JE SUIS FIDELE C’EST <br>A CE TRONE PEU IMPORTE QUI<br> MONTE DESSUS\""
      },
      {
        "numero": 2,
        "description": "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de “chiffrement par décalage”. L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
        "titre_note":"Le savais tu ?",
        "note":"<p id='enigme-normal'>Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ?</p>",
        "enigme": "<p id=\"enigme-normal\">Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza </p>"
      },
      {
        "numero": 3,
        "description": "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
        "titre_note":"Le savais tu ?",
        "note":"<p id='enigme-normal'>Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1.</p>",
        "enigme": " <p id='enigme-normal' style='font-family: cantarell;'>01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010 </p>"
      },
      {
        "numero":4
      }
    ]

const reponse1 = "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS";
const reponse3="LE ROI LION";

let index = 0;
var numeroEnigme = $('#numero-enigmes');
var descriptionEnigme = $('#description-enigme');
var contenuEnigme = $('#contenu-enigme');
var noteEnigme = $('#note');
var contenuNote = $('#contenu-note');

numeroEnigme.text(enigmes[0].numero);
descriptionEnigme.html(enigmes[0].description);
contenuEnigme.html(enigmes[0].enigme);
noteEnigme.text(enigmes[0].titre_note);
contenuNote.html(enigmes[0].note);
console.log(enigmes[0].numero);



let send = document.getElementById('send');
let result = document.getElementById('result');
//const response = result.querySelector('#response').value.toLowerCase().trim();
var responses = document.getElementById('response');
let currentIndex = 0;

send.addEventListener('click', () => {

});


function decodeCesar(message, shift) {
    var decodedMessage = "";
    for (var i = 0; i < message.length; i++) {
      var charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        // Décalage des lettres majuscules
        charCode = ((charCode - 65 - shift + 26) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        // Décalage des lettres minuscules
        charCode = ((charCode - 97 - shift + 26) % 26) + 97;
      }
      decodedMessage += String.fromCharCode(charCode);
    }
    return decodedMessage;
  }
  
  var message = enigmes[1].enigme;
  var shift = 8;
  
  var decodedMessage = decodeCesar(message, shift);
  console.log("message DCEODE:"+decodedMessage);




  // cacher le modal
function hideModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    }
    
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
    const boutonModal = document.getElementById('btn-retour');
    
    var timeFig = document.querySelector('.fig-time');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log("Response Premier"+$('#response').val().toLowerCase());
    var valeurRep =$('#response').val().toLowerCase();        

        $('#enigme-normal').css('font-family','Arial,sans-serif');

        resetInputs();
       enigmeSuivant(index); 
      function enigmeSuivant(index) {
       
        numeroEnigme.text(enigmes[index].numero);
        descriptionEnigme.html(enigmes[index].description);
        contenuEnigme.html(enigmes[index].enigme);
        noteEnigme.text(enigmes[index].titre_note);
        contenuNote.html(enigmes[index].note);
        console.log(enigmes[index].numero);

        

        if(index==0){
            console.log("rep1="+reponse1.toLowerCase());
            if(valeurRep == reponse1.trim().toLowerCase()){
                //Reponse Correcte
                modal.style.display ='flex';
                $('#titre-popup').text("Bravo! Votre réponse est correcte.");
                //Boutton Enigme suivant
                //onclick="window.location.href='index.html'";
                boutonModal.innerHTML="Enigme suivante";
                boutonModal.addEventListener('click',(event) => {
                    
                    
                    index = 1;
                    enigmeSuivant(index);
                    modal.style.display ='none';
                    
                })
                //Hide timeFig
                timeFig.style.display="none";
            }else{
                console.log("input rep1:"+valeurRep);
                modal.style.display ='flex';
                 //reponse incorrecte
                 $('#titre-popup').text("Desolé! Votre réponse est incorrecte.");
                 //Boutton Enigme à refaire
                 //onclick="window.location.href='index.html'";
                 boutonModal.innerHTML="Refaire l'enigme";
                 boutonModal.addEventListener('click',(event) => {
                    
                     
                     index = index;
                     enigmeSuivant(index);
                     modal.style.display ='none';
                 });
                 //Hide timeFig
                 timeFig.style.display="none";
            }
        }
         if (index==1) {
            if(valeurRep == decodedMessage.toLowerCase()){
                modal.style.display ='flex';
                boutonModal.innerHTML="Enigme suivante";
                //Reponse Correcte
                $('#titre-popup').text("Bravo! Votre réponse est correcte.");
                //Boutton Enigme suivant
                boutonModal.addEventListener('click',(event) => {
                    
                    
                    index = 2;
                    enigmeSuivant(index);
                    modal.style.display ='none';
                })
                //Hide timeFig
                timeFig.style.display="none";
            }else{
                modal.style.display ='flex';
                boutonModal.innerHTML="Refaire l'énigme";
                 //reponse incorrecte
                 $('#titre-popup').text("Bravo! Votre réponse est incorrecte.");
                 //Boutton Enigme à refaire
                 //onclick="window.location.href='index.html'";
 
                 boutonModal.addEventListener('click',(event) => {
                    
                     
                     index = 1;
                     enigmeSuivant(index);
                     modal.style.display ='none';
                 });
                 //Hide timeFig
                 timeFig.style.display="none";
            } 
        }

        

        if(index>2){
            //inputs.blur();
            numeroEnigme.text(enigmes[2].numero);
            //setInterval(timelapse, 1000);
            modal.style.display = "flex";
            countdownTimer();
        }

      }
      

      



      function countdownTimer() {
        var countdownElement = document.getElementById("countdown");
        var endDate = new Date("2023-07-08"); // Date spécifiée (AAAA-MM-JJ)
        //$('#timeout').html(hours+":"+minutes+":"+seconds);
       
        function updateCountdown() {
          var currentDate = new Date();
          var timeDifference = endDate - currentDate;
          
          if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "Le compte à rebours est terminé !";
          } else {
            var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);            
            $('#timeout').html(hours+":"+minutes+":"+seconds);
            console.log(hours+":"+minutes+":"+seconds);
        }
        }       
        updateCountdown();
        var countdownInterval = setInterval(updateCountdown, 1000);
      }

    });



