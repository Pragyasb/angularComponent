import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WebserviceService } from 'src/app/services/webservice.service';



@Component({
  selector: 'app-add-employee-reactive',
  templateUrl: './add-employee-reactive.component.html',
  styleUrls: ['./add-employee-reactive.component.scss']
})
export class AddEmployeeReactiveComponent implements OnInit {
  
  form =this.fb.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required,Validators.email]],
    doj: [new Date(),[Validators.required]],
    gender: ['',[Validators.required]],
    city: ['',[Validators.required]],
    desc: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(20)]]

  })
  constructor(private fb: FormBuilder,private webservice: WebserviceService) { }

  ngOnInit(): void {
  }

  recativeFormSubmit(data:any)
  {
    console.log(data);

    this.webservice.addUsers(data).subscribe((result)=>{
      console.log(result)
    })
  }
 
  get name()
  {
    return this.form.controls['name']
  }

  get email()
  {
    return this.form.controls['email']
  }
  get city()
  {
    return this.form.controls['city']
  }

  get doj()
  {
    return this.form.controls['doj']
  }
  get description()
  {
    return this.form.controls['desc']
  }
  get gender()
  {
    return this.form.controls['gender']
  }
}
