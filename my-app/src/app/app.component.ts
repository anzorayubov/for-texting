import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  title = 'my-app';
  todos;
  todoTitle = '';
  loading = false;

  ngOnInit() {
  }

  // добавление постов
  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }
    const newTodo = {
      title: this.todoTitle,
      completed: false
    };
    this.http.post('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(todo => {
        console.log('=>', todo);
        this.todos.push(todo);
        this.todoTitle = '';
      })
  };
  // обновление списка постов
  fetch() {
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe( delay(1500) )
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false;
      });
  }
}
