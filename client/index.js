import 'zone.js';
import 'reflect-metadata';
import {bootstrap} from 'angular2/angular2';
import {TodoCmp} from './app/app';
import {TodoService} from './app/todo/todo_service'

bootstrap(TodoCmp, TodoService);
