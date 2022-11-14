import { User } from "../models/user"
import { Task } from "../models/task"

export class TaskController {
    parseDate(date:Date | null){
        let result:Date;
        if(date != null){
            return new Date(date).toLocaleString()
        } else {
            return "date is not set";
        }
    }
    getUserNameByID(id:string, users:User[]){
        return users.find(i=> i.id == id)?.user_name
    }
    isTaskPresent(task:Task, tasks:Task[]){
        return tasks.find(i => i.id == task.id)
    }
}
