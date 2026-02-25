import { getDiv, getLabel, getInput } from "./dom.js";

const createFormDiv = function(classToAdd, text){
    const thisDiv = getDiv(classToAdd); //indicate class
    const thisLabel = getLabel(text); //indicate textContent
    const thisInput = getInput();
    thisDiv.append(thisLabel, thisInput);
    return thisDiv;
}

export { createFormDiv };