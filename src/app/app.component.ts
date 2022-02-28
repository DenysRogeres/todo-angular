import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = "Hello World";
  public todos: Todo[] = [];
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    })

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

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
  }

}
