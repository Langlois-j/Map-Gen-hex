class Biome {
  ID;
  NAME;
  BGColor;
}
class tile {
  ID;
  Biome;
  random_Biome() {
    var min = 1;
    var max = 8;
    switch (Math.trunc(min + Math.random() * (max - min))) {
      case 1:
        Biome = "Fog";
      case 2:
        Biome = "Ocean";
      case 3:
        Biome = "Montagne";
      case 4:
        Biome = "Plaine";
      case 5:
        Biome = "Foret";
      case 6:
        Biome = "Désert";
      case 7:
        Biome = "Neige";
      case 8:
        Biome = "Free";
    }
  }
}
class wolrd_map {
  ligne = 0;
  Colonne = 0;
  Grid = new Array();
  Set_Ligne(X) {
    ligne = X;
  }
  Set_colonne(X) {
    Colonne = X;
  }
  Clear_grid() {
    Grid.length = 0;
  }
  Create_Grid() {
    if (this.Ligne != 0 && this.Colonne != 0) {
      for (L = 1; L < this.ligne; L++) {
        Grid.push();
        for (C = 1; C < this.Colonne; C++) {
          var Tuile = new tile();
          Tuile.random_Biome;
          Tuile.ID = C + "@" + L;
          Grid[L].push(Tuile);
        }
      }
    } else {
      console("Ligne ou Colonne à null");
    }
  }
  ConsoleGgrid() {
    console(this.Grid[0][0].Biome);
  }
}
