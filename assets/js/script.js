/*Construisez une page html avec un carré et un champ de saisie de texte dans un formulaire.
Lorsque l'on appuie sur une touche de direction le carré se déplace de 10 px dans la bonne direction.
Quand le bloc atteint un bord de la page, il doit réaparaître de l'autre côté.
*/
//IL FAUT ALLER SUR WWW.KEYCODE.INFO POUR CONNAITRE LA VALEUR DES TOUCHES(HAUT DROITE BAS GAUCHE)

$(function(){
  //On stocke la largeur et la hauteur de la fenêtre dans des variables
  var windowWidth = $(window).width(); // window ne se définit pas, comme document
//  console.log('Largeur de fenêtre : ' + windowWidth + '.'); //pour récupérer les valeurs
  var windowHeight = $(window).height();  // window ne se définit pas, comme document
//  console.log('Hauteur de fenêtre : ' + windowHeight + '.');//pour récupérer les valeurs

  //On stocke la largeur et la hauteur du carré dans des variables
  var squareWidth = $('#square').width();
//  console.log('Hauteur du carré : ' + squareWidth + '.'); //pour récupérer les valeurs
  var squareHeight = $('#square').height();
//  console.log('Largeur du carré : ' + squareHeight + '.');  //pour récupérer les valeurs
  //Je met un évènement"keydown" sur mon Input.
  //Je met "event" en paramètre de ma fonction anonyme, grâce à ça je vais pouvoir récupérer la touche sur laquelle j'ai appuyé.
  $('#direction').keydown(function(event){
    var squarePositionLeft = $('#square').offset().left;
    var squarePositionTop = $('#square').offset().top;
    //Switch est utilisé lorsque l'on veut comparer une variable à plusieurs valeurs
    switch (event.keyCode) {

      case 37:                // case 37 : on lui applique -10 px
        squarePositionLeft -= 10;
      break;                  // break permet d'arrêter le code
      case 38:                // case 37 : on lui applique -10 px
        squarePositionTop -= 10;
      break;
      case 39:
        squarePositionLeft += 10;
      break;
      case 40:
        squarePositionTop += 10;
      break;
    }
// si la position gauche du carre devient inférieur à 0, C A D le cube touche le coté gauche
    if(squarePositionLeft < 0){
// alors la position du point gauche devient egal à la largeur de la fenetre - la largeur du cube
      squarePositionLeft = windowWidth - squareWidth;
// sinon si la position haute du carré atteint 0, C A D le cube touche le haut
    }else if(squarePositionTop < 0){
// alors la position haute devient égal à la hauteur de la fenetre - la hauteur du cube
      squarePositionTop = windowHeight - squareHeight;
// sinon si la position haute du carré + la hauteur du carré est > à la hauteur de la fenêtre, C A D touche le bas
    }else if((squarePositionTop + squareHeight) > windowHeight){
// alors la position haute du carré est égal à 0
      squarePositionTop = 0;
// sinon si la position gauche du carré + la largeur du carré est > à la largeur de la fenêtre, C A D touche le côté droit
    }else if((squarePositionLeft + squareWidth) > windowWidth){
// alors la position gauche du carré est égal à 0
      squarePositionLeft = 0;
    }


  //On définit la position du carré grâce à la fonction "Offset".
  $('#square').offset({top : squarePositionTop, left : squarePositionLeft});
  });
});



/* MA fonction (fonctionne)
$(function(){
    $(document).ready(function(){
        $('#direction').keydown(function(event){ // ce lance à l'appuie d'un touche
            if(event.keyCode == 37){// si j'appuie sur la flèche de gauche
            //ON RECUPERE LA VALEUR CSS DU MARGIN LEFT AVEC parseInt
                square = parseInt($('#square').css('margin-left'));
            // Si LA VALEUR MARGIN LEFT DU square EST INFERIEUR A 0, ALORS ON PASSE A DROITE
                if (square > 0){
            //SINON, ON APPLIQUE 10PX
                    $('#square').css('margin-left', square - 10);
                }else{
                    $('#square').css('margin-left', 1620);
                }
            }
            if(event.keyCode == 39){// Active la fonction en cliquant sur la flêche droite
              //ON RECUPERE LA VALEUR CSS DU MARGIN LEFT AVEC parseInt
                square = parseInt($('#square').css('margin-left'));
                if (square < 1620){
                    $('#square').css('margin-left', square + 10);
                }else{
                    $('#square').css('margin-left', 0);
                }
            }
            if(event.keyCode == 40){// Active la fonction en cliquant sur la flêche bas
                square = parseInt($('#square').css('margin-top'));
                if (square < 630){
                    $('#square').css('margin-top', square + 10);
                }else{
                    $('#square').css('margin-top', 0);
                }
            }
            if(event.keyCode == 38){// Active la fonction en cliquant sur la flêche haute
                square = parseInt($('#square').css('margin-top'));
                if (square > 0){
                    $('#square').css('margin-top', square - 10);
                }else{
                    $('#square').css('margin-top', 630);
                }
            }
        });
    });
});
*/
