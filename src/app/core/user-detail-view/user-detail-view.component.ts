import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'
import { UserService } from '../../services/user.service'
import { User } from '../../models/user'
import { UserController } from 'src/app/controllers/user.controller';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'user-detail-view',
  templateUrl: './user-detail-view.component.html',
  styleUrls: ['./user-detail-view.component.scss']
})
export class UserDetailViewComponent implements OnInit {
  display:boolean = false
  user:User = {
    id: "",
    user_name: "",
    password: "",
    email: "",
    role: 0,
    created_at: new Date,
    updated_at: null
  }
  roles:Role[]
  selectedRole:Role;
  constructor(
    private primengConfig:PrimeNGConfig, 
    private userServise:UserService,
    public userController:UserController
  ) 
  { 
    this.roles = [
      {Caption:'Administrator', Code:1},
      {Caption:'User', Code:0},
      {Caption:'Superviser', Code:2}
    ]
    this.selectedRole = this.roles.find((r)=> {r.Code === this.user.role}) as Role
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true
    this.userServise.UsertoDetailEvent.subscribe((data:any)=>{
      this.user   = data
      this.showDialog()
    })
  }
  save(){
    this.user.updated_at = new Date()
    console.log(this.user)
    this.userServise.toList(this.user)
    this.display = false
  }

  close(){
    this.display = false
  }
  showDialog() {
    this.display = true
  }
}
