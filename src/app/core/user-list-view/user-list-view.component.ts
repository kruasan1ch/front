import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { User } from 'src/app/models/user';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { UserController } from 'src/app/controllers/user.controller';

@Component({
  selector: 'user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent implements OnInit {
  constructor(
    private taskService: TaskService, 
    private userService: UserService,
    private userController: UserController) { }

  users:User[] = []

  cols: any[] = [
    {field: "user_name",   header: "Логин"},
    {field: "email",  header: "Почта"},
    {field: "role",  header: "Роль"},
  ]

  ngOnInit(): void {
    this.getAllUsers()
    this.userService.UsertoListEvent.subscribe((data:any)=>{
      console.log(data)
      if(this.userController.isUserPresent(data, this.users)){
        this.updateUsers(data)
      } else {
        this.users.push(data)
        this.userService.create(data).subscribe()
      }
    })
  }

  updateUsers(user:User){
    this.userService.update(user.id, user).subscribe()
  }

  getAllUsers(){
    this.userService.getAll().subscribe(
      data => {
        this.users = data
        this.users = this.users.filter((u) => u.id !== "none")
      },
      error =>{
        console.error(error)
      }
    )
  }
  deleteUser(id:string){
    this.userService.delete(id).subscribe()
    this.users = this.users.filter(i => i.id != id)
  }

  createUser(){
    let template ={
        id: "",
        user_name: "",
        password: "",
        email: "",
        role: 0,
        created_at: new Date,
        updated_at: null
      }
    this.userService.toDetail(template)
  }

  editUser(template:Task){
    this.userService.toDetail(template)
  }
}
