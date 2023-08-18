// Write your code here //
/*element = document.getElementById("main");

element.remove();*/

const main = document.querySelector('main');
main.remove();

const newHeader = document.createElement('h1');

newHeader.setAttribute('id', 'victory');

newHeader.textContent = "ERIN WISE is the champion";