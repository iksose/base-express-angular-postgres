/// <reference path="../../typings/tsd.d.ts" />
import {EventEmitter} from 'angular2/angular2';
import {TodoModel} from './todo_model.ts';

export class TodoService {
    add(todo: TodoModel):EventEmitter {
        let _ee = new EventEmitter();
        setTimeout(() => _ee.next(todo));

        return _ee.toRx();
    }

    remove(id: number):EventEmitter {
        let _ee = new EventEmitter();
        setTimeout(() => _ee.next(id));

        return _ee.toRx();
    }
}