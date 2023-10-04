// Write your code here!git@github.com:Shokuninja/phase-0-the-dom-modifying-elements-lab.git


// MY SOLUTION
main.remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.innerHTML = 'Lohan is the champion';

// LAB REVIEW SOLUTION
// const mainElement = document.getElementById('main')
// mainElement.remove();

// const newHeader = document.createElement('h1');
// console.log(newHeader);
// newHeader.id = 'victory';

// newHeader.textContent = "Lohan is the champion";
// document.body.appendChild(newHeader);

// Extra stuff from review

const divElement = document.createElement('div');
divElement.id = 'container';
document.body.appendChild(divElement);

divElement.innerText = "Hello\nWorld";