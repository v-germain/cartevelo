const map = new Map();
map.createMarkers();
// initialisation des paramètres du canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// remplissage du dessin en vert
ctx.fillStyle = 'green';
/* positionnement du canvas (x, y, larg, haut)
fillRect(x, y, largeur, hauteur) pour triangle plein
strokeRect(x, y, largeur, hauteur) pour contour de rectangle
clearRect(x, y, largeur, hauteur) pour rendre une zone rectangulaire transparante*/
ctx.fillRect(10, 10, 100, 100);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d', {alpha: false});