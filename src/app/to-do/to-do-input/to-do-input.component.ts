import { Component, OnInit } from '@angular/core';
// import { AngularFireList } from 'angularfire2/database';

import {  NgForm } from '@angular/forms';
import { TaskServiceService } from '../shared/task-service.service';
import { Tasks } from '../shared/tasks';

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.css']
})
export class ToDoInputComponent implements OnInit {
  tasklist : Tasks[]
  constructor(private taskService: TaskServiceService) { }

  ngOnInit() {
    var temp = this.taskService.getData();
    temp.snapshotChanges().subscribe(item =>{
      this.tasklist = [];
      item.forEach(element=>{
        var data = element.payload.toJSON();
        data["$key"] =element.key;
        this.tasklist.push(data as Tasks)
      })
    })
  }
  onItemClick(tsk:Tasks){
    this.taskService.selectedTask = Object.assign({},tsk);
  }

  }
  
}
