import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { User } from 'src/app/models/user';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import {TaskController} from '../../controllers/task.controller';

@Component({
  selector: 'task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.scss']
})
export class TaskListViewComponent implements OnInit {

  constructor(
    private taskService: TaskService, 
    private userService: UserService, 
    public taskController:TaskController) { }

  tasks:Task[] = []
  users:User[] = []

  cols: any[] = [
    {field: "title",  header: "Заголовок"},
    {field: "body",   header: "Текст"},
    {field: "user_id",  header: "Пользователь"},
    {field: "created_at",  header: "Дата создания"},
    {field: "done",  header: "Сделано"},
  ]

  ngOnInit(): void {
    this.getAllTasks()
    this.getAllUsers()
    this.taskService.toListEvent.subscribe((data:any)=>{
      if(this.taskController.isTaskPresent(data, this.tasks)){
        this.updateTask(data)
      } else {
        this.tasks.push(data)
        this.taskService.create(data).subscribe()
      }
    })
  }
  getAllTasks(){
    this.taskService.getAll().subscribe(
      data => {
        this.tasks = data.sort((a, b) => a.created_at.valueOf() - b.created_at.valueOf());
      },
      error =>{
        console.error(error)
      }
    )
  }
  getAllUsers(){
    this.userService.getAll().subscribe(
      data => {
        this.users = data
      },
      error =>{
        console.error(error)
      }
    )
  }
  deleteTask(id:string){
    this.taskService.delete(id).subscribe()
    this.tasks = this.tasks.filter(i => i.id != id)
  }
  editTask(task:Task){
    let tuple = {
      task: task,
      users: this.users
    }
    this.taskService.toDetail(tuple)
  }
  updateTask(task:Task){
    this.taskService.update(task.id, task).subscribe()
  }
  createTask(){
    let tuple ={
      task:
      {
        id: "",
        title: "",
        body: "",
        done: false,
        user_id: null,
        created_at: new Date,
        updated_at: null
      },
      users: this.users
    }
    this.taskService.toDetail(tuple)
  }
}
