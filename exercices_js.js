const produits = [
  { nom: 'Clavier', prix: 45 },
  { nom: 'Écran', prix: 320 },
  { nom: 'Souris', prix: 25 }
];

// 1. déstructuration du premier produit
const { nom, prix } = produits[0];
console.log(nom, prix);

// 2. find : le produit « Souris »
const souris = produits.find(p => p.nom === 'Souris');
console.log(souris.prix);

// 3. filter : prix inférieur à 100
console.log(produits.filter(p => p.prix < 100));

// 4. fonction fléchée avecRemise (moins 10 %)
const avecRemise = prix => prix * 0.9;
console.log(avecRemise(320));