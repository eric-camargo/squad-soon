
var images = ['new-astronauts.png', 'hinode.png', 'new-matrix.png', 'new-ninjas.png', 'party.png', 'starwars.png', 'superheroes.png'];
var size = images.length
var x = Math.floor(Math.random() * size)
console.log(images[x])
document.getElementById('randomImage').src=images[x];