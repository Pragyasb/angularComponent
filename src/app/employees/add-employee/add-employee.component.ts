import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WebserviceService } from 'src/app/services/webservice.service';
import { user } from 'src/app/user';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  selectedValue: string;

  constructor(private webservice : WebserviceService) {}
  
  formSubmit(data:user)
  {
    console.log(data);
    this.webservice.addUsers(data).subscribe((result)=>{
      console.log(result);
    })
  }
  
  ngOnInit(): void {
  }

}
