const addPopup = function(classToAdd){
    const popup = document.createElement("div");
    popup.classList.add(classToAdd);
    return popup;
}

export { addPopup };