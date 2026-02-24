import {domListItem} from "./dom.js";

//init arrays
const projectsArray = [];
const todoArray = [];

const createTodo = function(title, desc, dueDate, priority, notes) {
    const thisToDo = new todo(title, desc, dueDate, priority, notes);
    
    todoArray.push(thisToDo);
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

export { createTodo };