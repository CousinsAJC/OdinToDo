import { getDiv } from "./dom.js";

const addSidebar = function(classToAdd){
    const sidebar = getDiv(classToAdd);

    const topSide = addTopSide(classToAdd);
    sidebar.append(topSide);

    const botSide = addBotSide("botSide")
    sidebar.append(botSide);

    return sidebar;
}

const addTopSide = function(classToAdd){
    const topSide = getDiv(classToAdd);
    topSide.textContent = "I am the topSide";
    return topSide;
}

const addBotSide = function(classToAdd){
    const botSide = getDiv(classToAdd);
    botSide.textContent = "I am the botSide";
    return botSide;
}

export { addSidebar };