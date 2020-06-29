import { NullDataPipe } from './../NullData';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../Services/home-service.service';
import { Task } from '../Interfaces/Task';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: Task[];
  taskId:string;
  temp: Observable<Task[]>;
  
  constructor(
    private homeService: HomeServiceService, 
    private router:Router,
    private location: Location) {   }

  ngOnInit(){
    this.loadTask();
  }
  loadTask(){
    this.temp=this.homeService.getTask();
  }
  // ngOnInit(): void {
  //   this.homeService.getTask().subscribe(data =>{
  //     this.tasks=data;
  //   });

  // }
  // byId(id){
  //   this.selectedIndex=id;
  //   this.temp=Object.assign({},this.tasks[id])
  // }


  onClick(){
    this.router.navigate(['/process-list']);
  }
}
