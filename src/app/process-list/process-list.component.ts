import { Location } from '@angular/common';
import { ProcessDefinition } from './../Interfaces/ProcessDefinition';
import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../Services/home-service.service';
import { Observable } from 'rxjs';
import { AuthorizeServiceService } from '../Services/authorize-service.service';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.css']
})
export class ProcessListComponent implements OnInit {

  processDefinitions: ProcessDefinition[];
  processDef: Observable<ProcessDefinition[]>;
  constructor(private homeService: HomeServiceService,
    private location: Location,
    private authService: AuthorizeServiceService) { }

  ngOnInit(): void {
    //this.getProcessDefinition();
    this.homeService.getProcessDefinition().subscribe(data=>{
      this.processDefinitions=data
    })
   //this.loadProcess();
  }
  // getProcessDefinition(){
  //   this.homeService.getProcessDefinition().subscribe(processDefinition=> this.processDefinitions=processDefinition);
  // }
  // loadProcess(){
  //   this.processDef=this.homeService.getProcessDefinition();
  // }

  // public startProcess(Processid){
  //  var variable= {
  //   variables: {
  //     aVariable : {
  //         value : "aStringValue",
  //         type: "String"
  //     },
  //     anotherVariable : {
  //       value : true,
  //       type: "Boolean"
  //     }
  //   },
  //  businessKey : ""
  // }
  //  //this.id=Processid;
  //  //this.key = processKey;
  //   this.homeService.postStartProcessDefinition(Processid,variable);
  // }

  //Testing some method
  startProcess(p){
    this.authService.startProcess(p).subscribe(data=>console.log(data));
  }
  onBack(){
    this.location.back();
  }
}
