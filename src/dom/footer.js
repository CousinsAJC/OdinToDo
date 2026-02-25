const addFooter = function(classToAdd){
    const footer = document.createElement("footer");
    footer.classList.add(classToAdd);
    return footer;
}

export { addFooter };