
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
        "description": "Prouve ton talent d'espion et déchiffre cette réplique d’Okoyé écrite en Wakandais,et apprend par la même occasion la première valeur d’une Dora Milaje ",
        "titre_note":"Voici la transicription de l’alphabet",
        "note": "<span>A</span> = A ; <span>B</span> = b ; <span>C</span> = c ; <span>D</span> = d ; <span>E</span> = e ; <span>F</span> = f ; <span>G</span> = g ; <span>H</span> = h ; <span>I</span> = i ; <span>J</span> = j ; <span>K</span> = k ; <span>L</span> = l ; <span>M</span> = m ; <span>N</span> = n ; <span>O</span> = o ; <span>P</span> = p ; <span>Q</span> = q ; <span>R</span> = r ; <span>S</span> = s ; <span>T</span> = t ;<span>U</span> = u ; <span>W</span> = w ; <span>X</span> = x ; <span>Y</span> = y ; <span>Z</span> = z",
        "enigme": "\"SI JE SUIS FIDELE C’EST <br>A CE TRONE PEU IMPORTE QUI<br> MONTE DESSU\""
      },
      {
        "numero": 2,
        "description": "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de “chiffrement par décalage”. L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
        "titre_note":"Le savais tu ?",
        "note":"Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ?",
        "enigme": "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza"
      },
      {
        "numero": 3,
        "description": "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
        "titre_note":"Le savais tu ?",
        "note":"Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1.",
        "enigme": "01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010"
      }
    ]



var numeroEnigme = $('#numero-enigme');
var descriptionEnigme = $('#description-Enigme');
var contenuEnigme = $('#contenu-enigme');
var noteEnigme = $('#note');
var contenuNote = $('#contenu-note');

numeroEnigme.html(enigmes[0].numero);
descriptionEnigme.text(enigmes[0].enigme);
noteEnigme.text(enigmes[0].titre_note);
contenuNote.html(enigmes[0].note);
console.log(enigmes[0].numero);


// 
let send = document.getElementById('send');
let result = document.getElementById('result');
//const response = result.querySelector('#response').value.toLowerCase().trim();
var responses = $('#response').val();
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
    
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log("Response Premier"+$('#response').val().toLowerCase());
        /*if(decodedMessage.toLowerCase() == $('#response').val().toLowerCase()){
            console.log("DECODED:"+decodedMessage.toLowerCase());
            console.log("Reponse:"+$('#response').val().toLowerCase());
            console.log("MARINA");
            $('#contenu-popup').text("marina");
        }else{
            console.log("DECODED:"+decodedMessage.toLowerCase());
            console.log("Reponse:"+$('#response').val().toLowerCase());
            $('#contenu-popup').text("diso");
            console.log("DISO");
        }*/

      //modal.style.display = "block";
      index = 40;
      function timelapse(){
        
        if(index>0){
            $('#timeout').text(index-1); 
            index = index-1;   
        }else{
            console.log("END OF TIME");
            modal.style.display = "none";
        }
      }
      setInterval(timelapse, 1000);


    });



/*
    //API
    $.ajax({
        url: '.assets/reponse_api.json',
        datatype: 'json',
        success: function(questions) {
            console.log("arriver au Json");
            let index = 0, point = 0; 
            let total = questions.length;

            $('#total').text(total); 
            setForm(questions[index].question, questions[index].response, 1); 

            // Soumission des réponses
            $('#formulaire').submit(function(e) {
                e.preventDefault();

                let chooseResponse = isChooseResponse(questions, index);
                let isChoose = chooseResponse[0];
                let userResponse = chooseResponse[1];

                // Changer "question suivante" en "voir mon résultat" 
                if($('#index').text()==total-1){
                    $('#btn-next').val("Voir mon résultat");
                }
                
                if (index < (total - 1)) {

                    if (isChoose) { 
                        $('#quiz-container').slideUp(1000).slideDown(1000);
                        index++; 

                        setTimeout(() => {
                            if (index < total) {
                                setForm(questions[index].question, questions[index].response, (index + 1)); 
                            }
                        }, 200);
                        point = userResponse === true ? (point + 1) : point; 
                        userResponse = "false"; 
                        console.log(point);
                    }
                } else {

                    // gestion des réponses
                    if (isChoose) {
                        console.log(userResponse);
                        point = userResponse === true ? (point + 1) : point; 
                        console.log(point);
                        if (point <= (total / 3)) {
                            $('#titre').text("0" + point + "/" + total + " c'est pas tout à fait ça...");
                            $('#appreciation').text("Oula ! Heureusement que le Riddler est sous verrous... Il faut que vous vous repassiez les films, cette fois en enlevant peut-être le masque qui vous a bloqué la vue! Aller, rien n'est perdu !");
                        } else if (point <= (total / 2)) {
                            $('#titre').text(point + "/" + total + " pas mal !");
                            $('#appreciation').text("Encore un peu d'entraînement avec le Chevalier Noir vous serait bénéfique, mais vous pouvez marcher la tête haute, vos connaissances sont là. A vous de les consolider, foncez Gotham est votre de chasse !");
                        } else {
                            $('#titre').text(point + "/" + total + " bravo !");
                            $('#appreciation').text("Vous êtes véritablement un super fan de l'univers de Batman ! Comics, films, rien ne vous échappe. Bruce Wayne a de quoi être fier, Gotham est en paix et Batman peut prendre sa retraite, vous veillez aux grains");
                        }
                        $('#popup-result').css("display", "flex");
                    }
                }
            }); 
        },
        error: function(questions) {
            console.log(questions);
        },
    });

    // Fonction de verification s'il y a choix de réponse 

    function isChooseResponse(questions, index) {
        let userResponse = false; 
        // Vérification si une réponse est cochée
        for (let i = 0; i < questions[index].response.length; i++) {
            if ($('#checkbox' + i).is(":checked")) {
                
                userResponse = questions[index].response[i].isGood;
                console.log(questions[index].response[i].isGood);
            }
        }
        return [true, userResponse];
    }

    //altérnation du quizz
    function setForm(question, response, nbreQuiz) {
        $('#img-illustrate').attr("src", "Assets/img/Illustrations_game/Batgame_" + (2 + nbreQuiz) + ".png");
        $('#index').text(nbreQuiz);
        $('#quiz-question').empty();
        $('#quiz-question').append("<p class='question' id='question'></p>");
        $('#question').text(question);

        for (let i = 0; i < response.length; i++) {
            $('#quiz-question').append("<label for='checkbox" + i + "' class='response' id ='" + i + "'></label>");
            $('#' + i).append("<input type='checkbox' name='choix' id='checkbox" + i + "'>");
            $('#' + i).append("<p id='response" + i + "' > " + response[i].text + " </p>");
        }
        $('#quiz-question').append("<span id='error-message'></span>");
    }

});*/