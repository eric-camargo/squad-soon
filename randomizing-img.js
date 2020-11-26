
var images = ['Astronauts.png', 'Squad-HinodeTrio.png', 'Matrix.png', 'Ninjas.png', 'PartyTrio.png', 'Star-Wars.png', 'Super-Heroes.png'];
var size = images.length
var x = Math.floor(Math.random() * size)
console.log(images[x])
document.getElementById('randomImage').src=images[x];