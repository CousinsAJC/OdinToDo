import { createTodo } from "./todos.js";

const loadTodoForm = function(){
    const todoDiv = document.createElement("div");
    const todoForm = document.createElement("form");

    const titleDiv = getDiv();
    titleDiv.classList.add("form");
    const titleLabel = getLabel();
    titleLabel.textContent = "Title";
    const titleInput = getInput();
    titleDiv.append(titleLabel, titleInput);
    todoForm.append(titleDiv);

    const descDiv = getDiv();
    descDiv.classList.add("form");
    const descLabel = getLabel();
    descLabel.textContent = "Description";
    const descInput = getInput();
    descDiv.append(descLabel, descInput);
    todoForm.append(descDiv);

    const dueDateDiv = getDiv();
    dueDateDiv.classList.add("form");
    const dueDateLabel = getLabel();
    dueDateLabel.textContent = "Due Date";
    const dueDateInput = getInput();
    dueDateDiv.append(dueDateLabel, dueDateInput);
    todoForm.append(dueDateDiv);


    const priorityDiv = getDiv();
    priorityDiv.classList.add("form");
    const priorityLabel = getLabel();
    priorityLabel.textContent = "Priority";
    const priorityInput = getInput();
    priorityDiv.append(priorityLabel, priorityInput);
    todoForm.append(priorityDiv);

    const notesDiv = getDiv();
    notesDiv.classList.add("form");
    const notesLabel = getLabel();
    notesLabel.textContent = "Notes";
    const notesInput = getInput(); 
    notesDiv.append(notesLabel, notesInput);
    todoForm.append(notesDiv);

    const buttonDiv = getDiv();
    buttonDiv.classList.add("form");
    const addTodoButton = getButton();
    addTodoButton.textContent = "Add to list"

    addTodoButton.addEventListener("click", (event)=>{
        //check fields for validity
        createTodo(titleInput.value, descInput.value, dueDateInput.value, priorityInput.value, notesInput.value);
    })

    buttonDiv.append(addTodoButton);
    todoForm.append(buttonDiv);

    todoDiv.append(todoForm);

    return todoDiv;
}


const getDiv = function(){
    return document.createElement("div");
}

const getLabel = function(){
    return document.createElement("label");
}

const getInput = function(){
    return document.createElement("input");
}

const getButton = function(){
    return document.createElement("button");
}

export { loadTodoForm };