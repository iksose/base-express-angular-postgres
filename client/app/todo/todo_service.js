import {EventEmitter, Injectable, Inject, Component} from 'angular2/angular2';
import { Http }   from 'angular2/http';

export class TodoService {
    static get parameters() {
      return [[Http]];
    }
    static canActivate(){
      console.log("can activate")
    }
    constructor(Http){
      this.http = Http;
      this.getAll();
    }
    add(todo) {
        let _ee = new EventEmitter();
        setTimeout(() => _ee.next(todo));

        return _ee.toRx();
    }

    remove(id) {
        let _ee = new EventEmitter();
        setTimeout(() => _ee.next(id));

        return _ee.toRx();
    }

    getAll(){
      return this.http.get(`/api/todos`)
                .map(x => x.json()) // make json
                // .map(response => response.map(x=>x.text)) // extract "text" only
                .map(response => console.log(response))
                .subscribe(res => this.result = res)
    }
}
