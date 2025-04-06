export interface Task{
    name:string;
    status:'TO DO' | 'IN PROGRESS' | 'DONE'; 
    priority: number
}