// index.js
import { loadTodoForm } from "./dom.js";
import "./styles.css";
import { createTodo } from "./todos.js";

const body = document.querySelector("body");


//Check for saved todos on local pc

//if local todos, load them and display them
body.append(loadTodoForm());




//create a list item structure/object

//if not local todos load default page

//maybe when you add a todo an alert/popup that allows you to choose where you want to put it

//should have capacity for different projects/different todo lists