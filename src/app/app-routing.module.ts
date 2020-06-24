import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ProcessListComponent } from './process-list/process-list.component';
import { ProcessDetailsComponent } from './process-details/process-details.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'task-details/:id', component: TaskDetailsComponent},
  {path:'process-list', component: ProcessListComponent},
  {path: 'process-details/:id', component: ProcessDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
