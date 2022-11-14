import { Injectable, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

import { map } from "rxjs/operators";

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() UsertoDetailEvent = new EventEmitter<User>()
  @Output() UsertoListEvent   = new EventEmitter<User>()

  toDetail(template:any){
    this.UsertoDetailEvent.emit(template)
  }

  toList(user:any){
    console.log('toList')
    this.UsertoListEvent.emit(user)
  }

  update(id:string, user:User){
    return this.http.put(`http://${environment.API_URL}/user/${id}`, user)
  }
  constructor(private http: HttpClient) { }

  delete(id:string){
    return this.http.delete(`http://${environment.API_URL}/user/${id}`)
  }

  create(user:any){
    return this.http.post(`http://${environment.API_URL}/user`, user)
  }

  getAll(){ 
    return this.http.get<User[]>(`http://${environment.API_URL}/users`)
    .pipe(map(responce=>{
      return responce
    }))
  }
  
}
