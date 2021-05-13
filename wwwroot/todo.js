export class Todo{
    constructor(){
        if(!localStorage.getItem('todolist'))
        localStorage.setItem('todolist','[]');
    }

    get todoList(){
        return JSON.parse(localStorage.getItem('todolist'));
    }

    set todoList(value){
        localStorage.setItem('todolist', JSON.stringify(value));
    }

    addTodo(value){
        let _todoList = this.todoList;
        let uid = this.uuid();
        _todoList.push({id:uid,value});
        this.todoList = _todoList;
    }

    removeTodo(id){
        let _todoList = this.todoList;
        const index = _todoList.findIndex((item)=>item.id === id);
        _todoList.splice(index,1);
        this.todoList = _todoList;
    }

    uuid(){
        const time = new Date().getTime();
        return (((1+Math.random())*time)|0).toString(16);
    }
}