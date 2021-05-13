import {Todo} from "./todo.js";

export class Main{
    static go(){
        let todo = new Todo(),
            tdList = document.getElementById('tdList'),
            addBtn = document.getElementById('addBtn'),
            todoContent = document.getElementById('todoContent');
        tdList.addEventListener('click',(event)=>{
            if(event.target.className === 'removeBtn'){
                todo.removeTodo(event.target.dataset.id);
                this.render();
            }
        });
        addBtn.addEventListener('click',()=>{
            if(todoContent.value){
                todo.addTodo(todoContent.value);
                todoContent.value = "";
                this.render();
            } 
        });
            
        this.render();
    }

    static render(){
        let todo = new Todo(),
            tdList = document.getElementById('tdList'),
            temp = document.getElementById('temp'),
            content = temp.content.querySelector('.content'),
            removeBtn = temp.content.querySelector('.removeBtn');
        tdList.innerHTML = "";
        todo.todoList.forEach((item)=>{
            removeBtn.dataset.id = item.id;
            content.textContent = item.value;
            tdList.append(document.importNode(temp.content,true));
        });
    }
}

Main.go();