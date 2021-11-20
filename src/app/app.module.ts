import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FollowingSaviorComponent } from './following-savior/following-savior.component';
import { SpiritualGoalsComponent } from './spiritual-goals/spiritual-goals.component';
import { MaterialModule } from './materails.module';
import { TaskListComponent } from './Task/task-list/task-list.component';
import { TaskPlanningComponent } from './Task/task-planning/task-planning.component';

@NgModule({
  declarations: [
    AppComponent,
    FollowingSaviorComponent,
    SpiritualGoalsComponent,
    TaskListComponent,
    TaskPlanningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
