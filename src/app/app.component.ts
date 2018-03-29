import { Component, OnInit } from '@angular/core';
import { ToDo } from './models/ToDo';
import { RestService } from './services/rest.service';
import { APIURI } from './util/API-URI';
import { MatCheckboxChange } from '@angular/material';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todosList: ToDo[] = [];
  chkPosition: string = 'before';
  todoModel: ToDo = new ToDo('', false);

  constructor(private restService: RestService, private http: HttpClient,public snackBar: MatSnackBar) { }

  statusChanged(event: MatCheckboxChange, toDo: ToDo) {
    let index = this.getToDoIndexById(toDo.id);

    if (index >= 0) {
      toDo.isCompleted = event.checked;
      let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
      let body = JSON.stringify(toDo);
      return this.http.post<ToDo>(APIURI.UPDATE_TODO, body, { headers: headers })
        .subscribe(
        data => { this.snackBar.open('Message archived')},
        error => {this.todosList[index].isCompleted = !event.checked},
        () => { }
        );
    }
  }
  getToDoIndexById(id: number) {
    let idx = -1;
    for (let index = 0; index < this.todosList.length; index++) {
      const element = this.todosList[index];
      if (element.id == id) {
        idx = index;
      }
    }
    return idx;
  }

  deleteToDo(todo: ToDo) {
    let index = this.getToDoIndexById(todo.id);

    if (index >= 0) {
      this.http.get<Boolean>(APIURI.DELETE_TODO + "/" + todo.id).subscribe(
        data => { this.todosList.splice(index, 1); console.log(data) },
        error => console.log(error),
        () => { }
      );
    }
  }


  onSubmit() {
    console.log(this.todoModel);
     let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
      let body = JSON.stringify(this.todoModel);
      return this.http.post<ToDo>(APIURI.ADD_TODO, body, { headers: headers })
        .subscribe(
        data => this.todosList.push(data),
        error => console.log(error),
        () => { }
        );
  }

  ngOnInit() {
    this.http.get<ToDo[]>(APIURI.GET_TODOLIST).subscribe(
      data => this.todosList = data,
      error => console.log(error),
      () => { }
    );

  }

}
