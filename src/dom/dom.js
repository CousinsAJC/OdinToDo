const getBody = function(classToAdd){
    const body = document.querySelector("body");
    body.classList.add(classToAdd);
    return body;
}

const getPara = function(item){
    const thisPara = document.createElement("p");
    thisPara.textContent = item;
    return thisPara;
}


const getDiv = function(classToAdd){
    let thisDiv = document.createElement("div");
    thisDiv.classList.add(classToAdd);
    return thisDiv;
}


const getLabel = function(text){
    let thisLabel = document.createElement("label");
    thisLabel.textContent = text;
    return thisLabel;
}


const getInput = function(){
    return document.createElement("input");
}


const getButton = function(text){
    let thisButton = document.createElement("button");
    thisButton.textContent = text;
    return thisButton;
}



export { getDiv, getPara, getLabel, getInput, getButton, getBody };