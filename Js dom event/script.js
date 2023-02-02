// Selectionner la div qui contiendra notre div
let div = document.getElementById('top');
const menu = document.querySelector('#menu');

// Créer une nouvelle div dans notre div selectionnée
let newDiv = document.createElement('div');
newDiv.id = 'content';
newDiv.className = 'note';
newDiv.innerHTML = '<label style = "margin:0.5em"> Notre nouvelle div</label>'
// Créer un input à l'intérieur de la nouvelle div
let input = document.createElement('input');
input.placeholder = "Ecrire ton nom";

// On lie le input à la nouvelle div
newDiv.appendChild(input);

// On lie la nouvelle div à la selectionnée
div.appendChild(newDiv);

// Add li in ul

let li = document.createElement('li');
li.textContent = 'Products';
menu.appendChild(li);

li = document.createElement('li');
li.textContent = 'About Us';

// select the ul menu element
menu.appendChild(li);