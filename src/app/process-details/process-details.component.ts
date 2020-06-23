import { Location } from '@angular/common';
import { ProcessDefinition } from './../Interfaces/ProcessDefinition';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeServiceService } from '../Services/home-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.css']
})
export class ProcessDetailsComponent implements OnInit {

  process: Observable<ProcessDefinition>;
  processId;
  constructor(
    private homeService: HomeServiceService, 
    private avRoute:ActivatedRoute,
    private location: Location) { 
      const idParam = 'id';
      if (this.avRoute.snapshot.params[idParam]) {
      this.processId = this.avRoute.snapshot.params[idParam];
      }
    }

  ngOnInit(): void {
    this.loadProcess();
  }

  loadProcess(){
    this.process=this.homeService.getProcessDefinitionById(this.processId);
    console.log(this.processId);
  }
  onBack(){
    this.location.back();
  }
}
