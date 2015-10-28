import {EventEmitter, Injectable} from 'angular2/angular2';
import {TodoModel} from './todo_model';

@Injectable()
export class TodoService {
    add(todo) {
        let _ee = new EventEmitter();
        setTimeout(() => _ee.next(todo));

        return _ee.toRx();
    }

    remove(id) {
        console.log("derp", id)
        let _ee = new EventEmitter();
        setTimeout(() => _ee.next(id));

        return _ee.toRx();
    }
}
