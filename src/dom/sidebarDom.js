import { getDiv } from "./dom.js";

const addSidebar = function(classToAdd){
    const sidebar = getDiv(classToAdd);
    const topSide = getDiv("topSide");
    console.log(`${topSide} exists`);
    const botSide = getDiv("botSide");
    topSide.textContent = "Hello topSide";
    sidebar.append(topSide);
    sidebar.append(botSide);

    return sidebar;
}

export { addSidebar };