



//check for saved projects on local pc
//if local projects, load them into array
//if local projects, display them to the dom
let mainList = createProject("To Do");

//Check for saved todos on local pc
//if local todos, load them into array
//if local todos, display them to the dom
//if not local todos load default page

//prepare to take new todos from user
    //header.append(loadLists());
body.append(loadTodoForm());



const createDropdown = function(){
    //determine if there are local projects that need to be loaded

    const projectsDiv = document.createElement("div");
    const projectSelector = document.createElement("select");
    const optGroup = document.createElement("optgroup");
    const opt1 = new Option('ToDo', 'ToDo');
    const addProjectButton = document.createElement("button");

    projectSelector.name = "Projects";
    projectSelector.id = "projectSelect";
    optGroup.label = "Projects";
    addProjectButton.textContent = "Add Project";

    optGroup.append(opt1);
    projectSelector.add(optGroup);
    projectsDiv.append(projectSelector, addProjectButton);

    return projectsDiv;
}



const currentListDiv = document.createElement("div");






const loadTodoForm = function(){
    const todoDiv = document.createElement("div");
    const todoForm = document.createElement("form");
    const buttonDiv = getDiv("form");
    const addTodoButton = getButton("Add to list");

    addTodoButton.addEventListener("click", (event)=>{
        //check for valid inputs
        createTodo(titleInput.value, descInput.value, dueDateInput.value, priorityInput.value, notesInput.value);        
    });

    buttonDiv.append(addTodoButton);
    todoForm.append(createFormDiv("form", "Title"));
    todoForm.append(createFormDiv("form", "Description"));
    todoForm.append(createFormDiv("form", "Due Date"));
    todoForm.append(createFormDiv("form", "Priority"));
    todoForm.append(createFormDiv("form", "Notes"));
    todoForm.append(buttonDiv);
    todoDiv.append(todoForm);

    return todoDiv;
}




import {domListItem} from "./dom.js";

//init arrays
const projectsArray = [];
const todoArray = [];

const createTodo = function(title, desc, dueDate, priority, notes){
    const thisToDo = new todo(title, desc, dueDate, priority, notes);
    todoArray.push(thisToDo);
}

const createProject = function(title){
    const thisProject = new project(title);
    
    projectsArray.push(thisProject);
}

class project {
    constructor(title){
        this.title = title;
    }
}

class todo {
    constructor(title, desc, dueDate, priority, notes){
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

export { createTodo, createProject };