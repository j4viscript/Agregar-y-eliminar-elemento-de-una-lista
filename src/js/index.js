const myButton = document.getElementById("btnClick");
const myUl = document.getElementById("contenedor");
const liReferences = [];
let contador = 1;
// console.log("")
myButton.onclick = (event) => {
  const miLi =  document.createElement("li");
  miLi.innerText = `Numero #${contador}`;
  liReferences.push(miLi);
  myUl.appendChild(miLi);
  const secondaryButton = document.createElement("button")
  secondaryButton.innerText= `X`;
  miLi.appendChild(secondaryButton);
  secondaryButton.onclick = (event) => {
    myUl.removeChild(miLi);
    
    contador--;
    
  } 
  contador++;
} 

