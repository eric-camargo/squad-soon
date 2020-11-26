
var images = ['new-astronauts.png', 'hinode.png', 'matrix.png', 'ninjas.png', 'party.png', 'starwars.png', 'superheroes.png'];
var size = images.length
var x = Math.floor(Math.random() * size)
console.log(images[x])
document.getElementById('randomImage').src=images[x];