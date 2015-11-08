/// <reference path="../../typings/tsd.d.ts" />

import {Component, FormBuilder, FORM_DIRECTIVES, Validators, ControlGroup, Inject, NgFor} from 'angular2/angular2';
import {TodoModel} from './todo_model.ts';
import {TodoService} from './todo_service.ts';

@Component({
    selector: 'todo',
    templateUrl: './js/app/todo/todo.html',
    styleUrls: ['./js/app/todo/todo.css'],
    providers: [TodoService, FormBuilder],
    directives: [FORM_DIRECTIVES, NgFor]
})
export class TodoCmp {
    todo: TodoModel;
    todoForm: ControlGroup;
    todoList: TodoModel[] = [];

    constructor(@Inject(TodoService) private _todoService: TodoService,
                @Inject(FormBuilder) fb: FormBuilder) {

        this.todoForm = fb.group({
           "message": ["", Validators.required]
        });
    }

    add(message: string):void {
      console.log("fucked")
        this.todo = new TodoModel(message);

        this._todoService
            .add(this.todo)
            .subscribe(result => {
                this.todoList.push(result);
                this.todoForm.controls.message.updateValue("");
            });
    }

    remove(id: number):void {
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
