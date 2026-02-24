import { createTodo } from "./todos.js";

const loadLists = function(){
    //check for local lists
}


const loadTodoForm = function(){
    const todoDiv = document.createElement("div");
    const todoForm = document.createElement("form");

    todoForm.append(createFormDiv("form", "Title"));
    todoForm.append(createFormDiv("form", "Description"));
    todoForm.append(createFormDiv("form", "Due Date"));
    todoForm.append(createFormDiv("form", "Priority"));
    todoForm.append(createFormDiv("form", "Notes"));

    const buttonDiv = getDiv("form");
    const addTodoButton = getButton("Add to list");
    addTodoButton.addEventListener("click", (event)=>{
        //check for valid inputs
        createTodo(titleInput.value, descInput.value, dueDateInput.value, priorityInput.value, notesInput.value);        
    })
    buttonDiv.append(addTodoButton);

    todoForm.append(buttonDiv);
    todoDiv.append(todoForm);

    return todoDiv;
}




const createFormDiv = function(classToAdd, text){
    const thisDiv = getDiv(classToAdd); //indicate class
    const thisLabel = getLabel(text); //indicate textContent
    const thisInput = getInput();
    thisDiv.append(thisLabel, thisInput);
    return thisDiv;
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

export { loadTodoForm, loadLists };