import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Task } from '../Interfaces/Task';
import { HomeServiceService } from '../Services/home-service.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  tasks: Observable<Task>;
  taskId: string;
  constructor(
    private homeService: HomeServiceService, 
    private avRoute:ActivatedRoute,
    private location: Location) { 
      const idParam = 'id';
      if (this.avRoute.snapshot.params[idParam]) {
      this.taskId = this.avRoute.snapshot.params[idParam];
      }
    }

  ngOnInit(): void {
    this.loadTask();
    // this.homeService.getTaskById(this.taskId).subscribe(data=>{
    //   console.log(data)
    //   this.tasks=data;
    // })
  }

  loadTask(){
    this.tasks=this.homeService.getTaskById(this.taskId);
  }

  onBack(){
    this.location.back();
  }
}
