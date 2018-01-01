import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from './shared/task-service.service'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  providers:[TaskServiceService]
})
export class ToDoComponent implements OnInit {

  constructor(private taskService: TaskServiceService) { }

  ngOnInit() {
  }

}
