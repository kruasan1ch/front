import { Injectable, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

import { map } from "rxjs/operators";

import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  @Output() toDetailEvent = new EventEmitter<Task>()
  @Output() toListEvent   = new EventEmitter<Task>()
  constructor(private http: HttpClient) { }

  getAll(){ 
    return this.http.get<Task[]>(`http://${environment.API_URL}`)
    .pipe(map(responce=>{
      return responce
    }))
  }

  delete(id:string){
    return this.http.delete(`http://${environment.API_URL}/task/${id}`)
  }

  update(id:string, task:Task){
    return this.http.put(`http://${environment.API_URL}/task/${id}`, task)
  }

  create(task:any){
    return this.http.post(`http://${environment.API_URL}/task`, task)
  }

  toDetail(tuple:any){
    this.toDetailEvent.emit(tuple)
  }

  toList(task:any){
    this.toListEvent.emit(task)
  }
}
