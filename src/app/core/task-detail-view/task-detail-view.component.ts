import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'
import { TaskService } from '../../services/task.service'
import { Task } from '../../models/task'
import { User } from '../../models/user'
import {TaskController} from '../../controllers/task.controller'

@Component({
  selector: 'task-detail-view',
  templateUrl: './task-detail-view.component.html',
  styleUrls: ['./task-detail-view.component.scss']
})
export class TaskDetailViewComponent implements OnInit {
  display:boolean = false
  task:Task = {
    id: "",
    title: "",
    body: "",
    done: false,
    user_id: null,
    created_at: new Date,
    updated_at: null
  }

  users:User[]=[]
  selectedUser:User = {
    id: "",
    user_name: "",
    password: "",
    email: "",
    role: 0,
    created_at: new Date,
    updated_at: null
  }
  constructor(
    private primengConfig:PrimeNGConfig, 
    private taskServise:TaskService,
    public taskController:TaskController
  ) { }

  @Output() taskObject:EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.primengConfig.ripple = true
    this.taskServise.toDetailEvent.subscribe((data:any)=>{
      this.task   = data.task
      this.users  = data.users
      try{
        this.selectedUser = this.users.filter(u => u.id == this.task.user_id)[0]
      }
      catch{
        console.error("Cant find bound user for "+this.task.id+" task")
      }
      this.showDialog()
    })
  }
  
  save(){
    this.task.user_id = this.selectedUser.id
    this.task.updated_at = new Date()
    this.taskServise.toList(this.task)
    this.display = false
  }

  close(){
    this.display = false
  }

  showDialog() {
    this.display = true
  }

}
