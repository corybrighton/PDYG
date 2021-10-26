import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowingSaviorComponent } from './following-savior/following-savior.component';
import { SpiritualGoalsComponent } from './spiritual-goals/spiritual-goals.component';

const routes: Routes = [
  { path: '', component: FollowingSaviorComponent },
  { path: 'spiritualGoals', component: SpiritualGoalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
