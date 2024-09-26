var DrawNbCol = 10;
var DrawNbLig = 10;
function draw_map() {
  DrawNbCol = DrawNbCol * 2;
  DrawNbLig = DrawNbLig / 2;
  var noeudParent = document.querySelector("#drawing_area");
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
  return noeudBalise;
}
