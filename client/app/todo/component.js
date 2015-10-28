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
@Inject(TodoService)
@Inject(FormBuilder)
export class TodoCmp {
    constructor(){}

    add(message) {
        this.todo = new TodoModel(message);

        this._todoService
            .add(this.todo)
            .subscribe(result => {
                this.todoList.push(result);
                this.todoForm.controls.message.updateValue("");
            });
    }

    remove(id) {
        this._todoService
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
