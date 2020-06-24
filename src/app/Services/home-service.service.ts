import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Interfaces/Task';
import { tap, catchError } from 'rxjs/operators'; 
import { of } from 'rxjs';
import { ProcessDefinition } from '../Interfaces/ProcessDefinition';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  url: string="http://localhost:8080/engine-rest/"
  constructor(private http: HttpClient) { }

  // postProcessInstance(processDefinitionKey, variables): Observable<any> {
  //   const endpoint = `${this.url}process-definition/key/${processDefinitionKey}/start`;
  //   return this.http.post<any>(endpoint, variables).pipe(
  //     tap(processDefinitions => console.log(`posted process instance`))
      
  //   );
  // }
  public getTask(): Observable<Task[]>{
    //return this.http.get<Task[]>(this.url+"/task");
    const endpoint = `${this.url}task?sortBy=created&sortOrder=desc&maxResults=10`;
    return this.http.get<any>(endpoint).pipe(
      tap(form => this.log(`fetched tasks`)),
      catchError(this.handleError('getTask', []))
    );
  }

  public getTaskById(taskId): Observable<any>{
    const endpoint=`${this.url}task/${taskId}`;
    return this.http.get<any>(endpoint).pipe(
      tap(form => this.log(`fetched tasks by ID`)),
      catchError(this.handleError('getTaskById', []))
    );
  }

  public getProcessDefinition(): Observable<ProcessDefinition[]>{
    return this.http.get<ProcessDefinition[]>(this.url+ 'process-definition?latestVersion=true').pipe(
      tap(processDefinitons=> this.log(`fetched processDefinitions`)),
      catchError(this.handleError('getProcessDefinition',[]))
    );

  }

  public getProcessDefinitionById(processId): Observable<any>{
    const endpoint=`${this.url}process-definition/${processId}`;
    console.log(endpoint);
    return this.http.get<any>(endpoint).pipe(
      tap(form => this.log(`fetched process by ID`)),
      catchError(this.handleError('getProcessDefinitionById', []))
    );
  }

  public postLoginVerify(variable){
    //console.log(variable);
    const endpoint=`${this.url}identity/verify/${variable}`;
    console.log(endpoint);
    return this.http.post<any>(endpoint,variable).pipe(
      tap(form => this.log(`user is verified`)),
      catchError(this.handleError('postLoginVerify', []))
      
    );
    
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

    
    }


    private log(message: string) {
      console.log(message);

}
}

