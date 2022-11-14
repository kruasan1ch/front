import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DividerModule } from 'primeng/divider';
import { MenubarModule } from 'primeng/menubar';
import { PasswordModule } from 'primeng/password';

import { TaskController } from '../controllers/task.controller'

import { TaskDetailViewComponent } from './task-detail-view/task-detail-view.component';
import { TaskListViewComponent } from './task-list-view/task-list-view.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserController } from '../controllers/user.controller';
import { UserDetailViewComponent } from './user-detail-view/user-detail-view.component';



@NgModule({
  declarations: [
    TaskDetailViewComponent,
    TaskListViewComponent,
    TaskViewComponent,
    NavbarComponent,
    UserListViewComponent,
    UserViewComponent,
    UserDetailViewComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    InputTextareaModule,
    ToggleButtonModule,
    ButtonModule,
    DialogModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    ScrollPanelModule,
    DividerModule,
    MenubarModule,
    PasswordModule
  ],
  exports: [
    TaskDetailViewComponent,
    TaskListViewComponent,
    TaskViewComponent,
    NavbarComponent
  ],
  providers:[
    TaskController,
    UserController
  ]
})
export class CoreModule { }
