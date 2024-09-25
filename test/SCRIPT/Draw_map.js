function draw_map() {
  console.log = `Appel function draw_map`;
  var Lig = 10;
  var Col = 10;
  //On réécrit chaque lettre dans un span
  console.log = `Boucle start function draw_map`;
  for (var i = 0; i <= Lig; i++) {
    var tuile = document.createElement("Hex-tuile");
    tuile.className = "Fog";
    console.log = `Boucle '+ i +' function draw_map`;
  }
  console.log = `Boucle END function draw_map`;
}
/* 
var listeNoeud = document.getElementsByTagName("main");
var premierMain = listeNoeud[0];

var noeudBalise = document.createElement("div");
var noeudParent = document.querySelector("html");
noeudBalise.style.backgroundColor = "blue";
noeudBalise.style.width = "100px";
noeudBalise.style.height = "100px";
noeudParent.appendChild(noeudBalise);
alert("Le noeud parent est : " + noeudBalise.parentNode.nodeName); */

var noeudBalise = document.createElement("div");
var noeudParent = document.querySelector("#draw_zone");
noeudBalise.style.backgroundColor = "blue";
noeudBalise.style.width = "100px";
noeudBalise.style.height = "100px";
noeudBalise.style.display = "inline-block";
noeudParent.appendChild(noeudBalise);
