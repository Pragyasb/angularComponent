import { AfterViewInit, Component,  ViewChild } from '@angular/core';
import { WebserviceService } from 'src/app/services/webservice.service';
import { user } from 'src/app/user';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements AfterViewInit {
users: user[]=[];
displayedColumns = ['id','name','email','doj','gender','city','desc','delete']
dataSource = new MatTableDataSource<user>(this.users);

@ViewChild(MatPaginator) paginator: MatPaginator;
constructor(private webservice: WebserviceService) {}

 ngAfterViewInit() {
   this.getAllUsers();
   this.dataSource.paginator = this.paginator;
 }


  public getAllUsers(){
       this.webservice.getUsers().subscribe((data)=>{
         //this.users= data as user[];
         this.dataSource.data = data as user[]
        // console.log(this.dataSource.data)
       })
   }
  public deleteRow(id: number)
 {
   this.dataSource.data.splice(id-1,1);
   console.log(this.dataSource.data[0])
   this.webservice.delelteUser(id).subscribe((res)=>{
    // console.log(res);
   })
 }

}
