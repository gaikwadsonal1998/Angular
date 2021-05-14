import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:Todo[];
  constructor() { 
    this.todos =[
      {
        sno:1,
        title:"Todo number 1",
        desc:"This is first todo",
        active:true
      },
      {
        sno:2,
        title:"Todo number 2",
        desc:"This is secondt todo",
        active:true
      },{
        sno:3,
        title:"Todo number 3",
        desc:"This is Third todo",
        active:true
      }
    ]
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
  }

}
