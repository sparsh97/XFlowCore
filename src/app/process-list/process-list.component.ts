import { Location } from '@angular/common';
import { ProcessDefinition } from './../Interfaces/ProcessDefinition';
import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../Services/home-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.css']
})
export class ProcessListComponent implements OnInit {

  //processDefinitions: ProcessDefinition[];
  processDef: Observable<ProcessDefinition[]>;
  constructor(private homeService: HomeServiceService,
    private location: Location) { }

  ngOnInit(): void {
    //this.getProcessDefinition();
    this.loadProcess();
  }
  // getProcessDefinition(){
  //   this.homeService.getProcessDefinition().subscribe(processDefinition=> this.processDefinitions=processDefinition);
  // }
  
  loadProcess(){
    this.processDef=this.homeService.getProcessDefinition();
    
  }

  onBack(){
    this.location.back();
  }
}
