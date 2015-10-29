import 'zone.js';
import 'reflect-metadata';
import {bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {TodoCmp} from './app/app';
import {TodoService} from './app/todo/todo_service'
import { ROUTER_PROVIDERS } from 'angular2/router';

bootstrap(TodoCmp, [TodoService, HTTP_PROVIDERS, ROUTER_PROVIDERS]);
