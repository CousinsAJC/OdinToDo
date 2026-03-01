import { getBody } from "./dom/dom.js";
import { addSidebar } from "./dom/sidebarDom.js";
import { addMain } from "./dom/main.js";
import { addPopup } from "./dom/main.js";
import { getDiv } from "./dom/dom.js";
import "./styles/styles.css";


//init variables/arrays
const projectsArray = [];


//init webpage sections and show on dom
const body = getBody("body");
const sidebar = addSidebar("sidebar");
const main = addMain("main");
const popup = addPopup("popup");

body.append(sidebar);
body.append(main);
body.append(popup);