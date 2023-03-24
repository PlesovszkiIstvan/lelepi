const aSide = document.querySelector('#sideA');
const bSide = document.querySelector('#sideB');
const cSide = document.querySelector('#sideC');
const calcButton = document.querySelector('#calcButton');
const Anws = document.querySelector('#Anwser');

console.log("Plesovszki István - Szoft, I-2/N. - 2023.03.24");

calcButton.addEventListener('click', ()=>{
    const valueofa = aSide.value;
    const valueofb = bSide.value;
    const valueofc = cSide.value;
    
    let anwser = valueofa * valueofb * valueofc;

    Anws.value = anwser;
});