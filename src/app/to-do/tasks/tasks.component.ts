import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../shared/task-service.service';
import { Tasks } from '../shared/tasks';

import { AngularFireList } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasksList : AngularFireList<Tasks>
  constructor(private taskService: TaskServiceService) { }

  ngOnInit() {
    // this.taskService.getData();
    this.resetForm();

  }
  onSubmit(form: NgForm){
    if(form.value.$key == ''){
      this.taskService.addTask(form.value);
    }
    else{
      this.taskService.updateTsk(form.value)
    }
    this.resetForm(form)
  }
  resetForm(form?: NgForm){
    if(form != null)
      form.reset();
    this.taskService.selectedTask = {
      $key: '',
      name: '',
      desc: '',
      priority: 0
    }
  }
  onDelete(form:NgForm){
    if(confirm("Delete This Record?")==true){
      this.taskService.deleteTask(form.value.$key);
      this.resetForm(form)
    }
  }
}
