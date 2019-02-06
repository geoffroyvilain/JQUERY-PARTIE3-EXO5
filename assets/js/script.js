/*Construisez une page html avec un carré et un champ de saisie de texte dans un formulaire.
Lorsque l'on appuie sur une touche de direction le carré se déplace de 10 px dans la bonne direction.
Quand le bloc atteint un bord de la page, il doit réaparaître de l'autre côté.
*/
$(function(){
    $(document).ready(function(){
        $('#control').keydown(function(event){ // ce lance à l'appuie d'un toucheq
            if(event.keyCode == 37){// si j'appuie sur la flèche de gauche
            //ON RECUPERE LA VALEUR CSS DU MARGIN LEFT AVEC parseInt
                carre = parseInt($('#carre').css('margin-left'));
            // Si LA VALEUR MARGIN LEFT DU CARRE EST INFERIEUR A 0, ALORS ON PASSE A DROITE
                if (carre > 0){
            //SINON, ON APPLIQUE 10PX
                    $('#carre').css('margin-left', carre - 10);
                }else{
                    $('#carre').css('margin-left', 1620);
                }
            }
            if(event.keyCode == 39){// si j'appuie sur la flèche de droite
                carre = parseInt($('#carre').css('margin-left'));
                if (carre < 1620){
                    $('#carre').css('margin-left', carre + 10);
                }else{
                    $('#carre').css('margin-left', 0);
                }
            }
            if(event.keyCode == 40){// si j'appuie sur la flèche du bas
                carre = parseInt($('#carre').css('margin-top'));
                if (carre < 630){
                    $('#carre').css('margin-top', carre + 10);
                }else{
                    $('#carre').css('margin-top', 0);
                }
            }
            if(event.keyCode == 38){// si j'appuie sur la flèche du haut
                carre = parseInt($('#carre').css('margin-top'));
                if (carre > 0){
                    $('#carre').css('margin-top', carre - 10);
                }else{
                    $('#carre').css('margin-top', 630);
                }
            }
        });
    });
});




/* ICI ON RECUPERE LES VALEURS DES MARGES
  var left  = parseInt(cadre.marginLeft);
  var top = parseInt(cadre.marginTop);
  var right = parseInt(cadre.marginRight);
  var bottom = parseInt(cadre.marginBottom);
//click à droite --> margin left pour dépacer à droite
switch (event.keyCode) {
      case 37: cadre.marginLeft = String(gauche - 20) + 'px'; // On effectue le déplacement, ici, 20px à gauche

}
*/
