import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TasksComponent } from './to-do/tasks/tasks.component';
import { ToDoInputComponent } from './to-do/to-do-input/to-do-input.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    TasksComponent,
    ToDoInputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
