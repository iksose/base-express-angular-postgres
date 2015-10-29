import {Component, FormBuilder, FORM_DIRECTIVES, Validators, ControlGroup, Inject, NgFor} from 'angular2/angular2';
import {TodoModel} from './todo_model';
import {TodoService} from './todo_service';

@Component({
    selector: 'todo',
    templateUrl: './js/app/todo/todo.html',
    styleUrls: ['./js/app/todo/todo.css'],
    providers: [TodoService, FormBuilder],
    directives: [FORM_DIRECTIVES, NgFor]
})
export class TodoCmp {
    static get parameters() {
      return [TodoService, FormBuilder]; // you can also return just [TodoService]
    }
    constructor(todoService, FormBuilder){
      this.todoService = todoService;
      this.fb = FormBuilder;
      this.todoForm = this.fb.group({
           "message": ["", Validators.required]
      });
      this.todoList = [];
      console.log("derp", this)
    }

    add(message) {
        this.todo = new TodoModel(message);

        this.todoService
            .add(this.todo)
            .subscribe(result => {
                this.todoList.push(result);
                this.todoForm.controls.message.updateValue("");
            });
    }

    remove(id) {
        this.todoService
            .remove(id)
            .subscribe(id => {
                this.todoList.forEach((tl, index) => {
                    if (tl.createdAt === id) {
                        return this.todoList.splice(index, 1);
                    };
                });
            });
    }
}
