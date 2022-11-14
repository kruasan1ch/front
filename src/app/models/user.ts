export interface User{
    id: string,
    user_name: string,
    password: string,
    email: string,
    role: number,
    created_at:Date,
    updated_at:Date | null
}