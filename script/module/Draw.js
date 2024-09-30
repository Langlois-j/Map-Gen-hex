//Import des function de dépendence
/* import { wolrd_map } from "script/module/StructurePoo.js";
import { tile } from "script/module/StructurePoo.js"; */
// déclaration des variables globales
var DrawNbCol = 10;
var DrawNbLig = 10;
//let carte = new wolrd_map();

function draw_map() {
  var drawzonename = event.target.getAttribute("data-name");
  var drawzonetype = event.target.getAttribute("data-balise");
  var drawzonetag = TagForQuerrySelector(drawzonetype, drawzonename);
  clear_map(drawzonetag);
  SetNbCol();
  SetNbLig();
  DrawNbCol = DrawNbCol * 2;
  DrawNbLig = DrawNbLig / 2;
  /*   carte.Set_Ligne(DrawNbLig);
  carte.Set_colonne(DrawNbCol); 
  carte.Create_Grid();
  carte.ConsoleGgrid();*/
  var noeudParent = document.querySelector(drawzonetag);
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
  return noeudBalise;
}
function random_Biome() {
  var min = 1;
  var max = 8;
  switch (Math.trunc(min + Math.random() * (max - min))) {
    case 1:
      return "Fog";
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
function clear_map(drawzonetag) {
  var listeNoeuds = document.querySelectorAll(drawzonetag + " Hex-Ligne");
  for (var i = 0; i < listeNoeuds.length; i++) {
    var noeud = listeNoeuds[i];
    var noeudParent = noeud.parentNode;
    var noeudLibre = noeudParent.removeChild(noeud);
  }
}
function TagForQuerrySelector(typeBalise, valeurBalise) {
  switch (typeBalise) {
    case "id":
      return "#" + valeurBalise;
    default:
      console.log(`Sorry, we are out of ${typeBalise}.`);
      return null;
  }
}
