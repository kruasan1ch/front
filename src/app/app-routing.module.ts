import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './core/task-view/task-view.component'
import { UserViewComponent } from './core/user-view/user-view.component';

const routes: Routes = [
  {path: 'tasks', component: TaskViewComponent},
  {path: 'users', component: UserViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
