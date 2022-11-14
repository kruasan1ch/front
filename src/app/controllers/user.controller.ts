import { User } from "../models/user"

export class UserController {
    parseDate(date:Date | null){
        let result:Date;
        if(date != null){
            return new Date(date).toLocaleString()
        } else {
            return "date is not set";
        }
    }
    isUserPresent(user:User, users:User[]){
        return users.find(i => i.id == user.id)
    }
}