import { getBody } from "./dom/dom.js";
import { addHeader } from "./dom/header.js";
import { addSidebar } from "./dom/sidebarDom.js";
import { addMain } from "./dom/main.js";
import { addFooter } from "./dom/footer.js";
import { addPopup } from "./dom/popup.js";
import { getDiv } from "./dom/dom.js";
import "./styles/styles.css";


//init variables/arrays




//init webpage sections and show on dom
const body = getBody("body");
//const header = addHeader("header");
const sidebar = addSidebar("sidebar");
const main = addMain("main");
//const footer = addFooter("footer");
const popup = addPopup("popup");



//body.before(header);
body.append(sidebar);
body.append(main);
//body.after(footer);
body.append(popup);


//TESTS

//header.textContent = "I am the header";

sidebar.textContent = "I am the sidebar";

main.textContent = "I am the main";

//footer.textContent = "I am the footer";