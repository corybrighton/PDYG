import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowingSaviorComponent } from './following-savior/following-savior.component';
import { SpiritualGoalsComponent } from './spiritual-goals/spiritual-goals.component';
import { TaskListComponent } from './Task/task-list/task-list.component';
import { TaskPlanningComponent } from './Task/task-planning/task-planning.component';

const routes: Routes = [
  { path: '', component: FollowingSaviorComponent },
  { path: 'spiritualGoals', component: SpiritualGoalsComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'task-planning', component: TaskPlanningComponent },
  { path: '**', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
