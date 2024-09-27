function random_entier(min, max) {
  return Math.trunc(min + Math.random() * (max - min));
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
