import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) {}

  title = 'my-app';
  todos;

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe(x =>{
        console.log(x)
        this.todos = x;
      })
  }

}
