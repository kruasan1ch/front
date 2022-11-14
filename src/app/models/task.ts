export interface Task{
    id:string,
    title:string,
    body:string,
    done:boolean,
    user_id:string | null,
    created_at:Date,
    updated_at:Date | null
}