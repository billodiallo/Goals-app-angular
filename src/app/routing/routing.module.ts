import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'


import { GoalComponent } from '../goal/goal.component';
import { AboutComponent } from '../about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { GoalDetailComponent } from '../goal-detail/goal-detail.component';


// Defining routes
const routes:Routes=[
  { path: 'goals', component: GoalComponent},
  { path: 'about', component: AboutComponent},
  { path: 'goals/:id', component: GoalDetailComponent },
  { path: '', redirectTo:"/goals", pathMatch:"full" },
  { path:'**', component:NotFoundComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
