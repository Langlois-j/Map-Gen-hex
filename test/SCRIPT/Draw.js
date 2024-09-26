var DrawNbCol = 10;
var DrawNbLig = 10;
var baliseZoneDessin = "#drawing_area";

/* //Import des function de dépendence
var js = document.createElement("script");
js.src = "ToolBox.js";
//Ajout de la balise dans la page
document.head.appendChild(js);*/
function draw_map() {
  clear_map();
  SetNbCol();
  SetNbLig();
  DrawNbCol = DrawNbCol * 2;
  DrawNbLig = DrawNbLig / 2;
  var noeudParent = document.querySelector(baliseZoneDessin);
  draw_lig(DrawNbLig, noeudParent);
}
function draw_col(NbCol, noeudParent) {
  for (var i = 0; i < NbCol; i++) {
    noeudParent.appendChild(draw_tile());
  }
  return noeudParent;
}
function draw_lig(NbLig, noeudParent) {
  for (var i = 0; i < NbLig; i++) {
    var noeudBalise = document.createElement("Hex-Ligne");
    noeudParent.appendChild(draw_col(DrawNbCol, noeudBalise));
  }
  return noeudBalise;
}
function draw_tile() {
  var noeudBalise = document.createElement("Hex-tuile");
  noeudBalise.className = random_Biome();
  noeudBalise.style = "--HEX-taille-PX:2000px;";
  return noeudBalise;
}
function random_Biome() {
  var min = 1;
  var max = 8;
  switch (Math.trunc(min + Math.random() * (max - min))) {
    case 1:
      return "Frog";
    case 2:
      return "Ocean";
    case 3:
      return "Montagne";
    case 4:
      return "Plaine";
    case 5:
      return "Foret";
    case 6:
      return "Désert";
    case 7:
      return "Neige";
    case 8:
      return "Free";
  }
}
function SetNbCol() {
  let baliseNom = document.getElementById("Map_Nb_Col");
  DrawNbCol = baliseNom.value;
}
function SetNbLig() {
  let baliseNom = document.getElementById("Map_Nb_Lig");
  DrawNbLig = baliseNom.value;
}
function clear_map() {
  var listeNoeuds = document.querySelectorAll(baliseZoneDessin + " Hex-Ligne");
  for (var i = 0; i < listeNoeuds.length; i++) {
    var noeud = listeNoeuds[i];
    var noeudParent = noeud.parentNode;
    var noeudLibre = noeudParent.removeChild(noeud);
  }
}
