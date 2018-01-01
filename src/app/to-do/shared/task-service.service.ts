import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

import { Tasks } from './tasks';

@Injectable()
export class TaskServiceService {
  taskList:AngularFireList<any>;  

  selectedTask : Tasks = new Tasks();
  
  constructor(private firebase:AngularFireDatabase) { }
  getData(){
    this.taskList = this.firebase.list('tasks');
    return this.taskList
  }

  addTask(task:Tasks){
    this.taskList.push({
      name : task.name,
      desc : task.desc,
      prio : task.priority
      // isDone : task.isDone
    })
  }
  updateTsk(tsk:Tasks){
    this.taskList.update(tsk.$key,{
      name:tsk.name,
      desc:tsk.desc,
      priority:tsk.priority
    })
  }
  deleteTask(key: string){
    this.taskList.remove(key);
  }
}
