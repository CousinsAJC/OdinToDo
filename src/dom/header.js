
const addHeader = function(classToAdd){
    const header = document.createElement("header");
    header.classList.add(classToAdd);
    return header;
}

export { addHeader };