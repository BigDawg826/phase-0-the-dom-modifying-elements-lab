// Write your code here!
const maintag = document.querySelector('#main');
maintag.remove();

const newHeader = document.createElement('h1');

newHeader.id = "victory";
newHeader.textContent = 'Darian is the champion';
console.log(newHeader, "sldkjsl");
document.body.append(newHeader);
