import { loadTodoForm, loadLists } from "./dom.js";
import "./styles.css";

//init webpage/array vars
const header = document.querySelector("header");
const body = document.querySelector("body");


//check for saved projects on local pc
//if local projects, load them into array
//if local projects, display them to the dom
//if not local projects load default page

//Check for saved todos on local pc
//if local todos, load them into array
//if local todos, display them to the dom
//if not local todos load default page

//prepare to take new todos from user
    //header.append(loadLists());
body.append(loadTodoForm());

