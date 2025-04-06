import { Component } from "@angular/core";
import { Task } from "./task-interface";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-task-list',
    imports:[CommonModule],
    templateUrl:'./task-list.component.html',
    styleUrl:'./task-list.component.scss'
})
export class TaskList {
    tasks:Task[]=[
        {name:'wake up', status:'DONE', priority:10},
        {name:'turn on radio', status:'TO DO', priority:40},
        {name:'go to the gym', status:'DONE', priority:40},
        {name:'learn English', status:'IN PROGRESS', priority:40},
        {name:'take a shower', status:'TO DO', priority:50},
        {name:'care on myself', status:'IN PROGRESS', priority:50},
        {name:'kiss my boyfriend', status:'TO DO', priority:50},
        {name:'drink a tea', status:'DONE', priority:30},
        {name:'buy Guayusa', status:'TO DO', priority:30},
        {name:'read a book', status:'TO DO', priority:20}
    ]

}