import { getDiv } from "./dom.js";

const addMain = function(classToAdd){
    const main = getDiv(classToAdd);
    return main;
}


const createFormDiv = function(classToAdd, text){
    const thisDiv = getDiv(classToAdd); //indicate class
    const thisLabel = getLabel(text); //indicate textContent
    const thisInput = getInput();
    thisDiv.append(thisLabel, thisInput);
    return thisDiv;
}


const addPopup = function(classToAdd){
    const popup = document.createElement("div");
    popup.classList.add(classToAdd);
    return popup;
}

export { addMain, createFormDiv, addPopup };