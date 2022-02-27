import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = "Hello World";
  public todos: Todo[] = [];

  constructor() {
    this.todos.push({id: 1, title: "Cortar cabelo", done: true})
    this.todos.push({id: 2, title: "Passear com cachorro", done: false})
    this.todos.push({id: 3, title: "Estudar para prova", done: false})
    this.todos.push({id: 4, title: "Limpar casa", done: false})
  }

  alterarTexto() {
    this.title = "New title";
  }

  remover(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if(index != -1) {
      this.todos.splice(index, 1);
    }
  }
}
