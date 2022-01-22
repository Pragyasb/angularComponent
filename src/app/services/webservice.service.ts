import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
 url ="http://localhost:3000/posts";
 private siblingDataSource = new Subject<String>(); 
 siblingData$= this.siblingDataSource.asObservable();

  constructor(private http : HttpClient) {}

  getUsers()
  {
    return this.http.get(this.url);
  }
  
  addUsers(data:any)
  {
   return this.http.post(this.url,data);
  }

  delelteUser(id:number)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  sendData(data:string)
  {
    this.siblingDataSource.next(data);
  }

}
