import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WebserviceService } from '../services/webservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() parentValueOne:'';
  @Output() newEvent = new EventEmitter<string>();
  childData:'';
  childOneData:any;
  constructor(private service: WebserviceService) { }

  ngOnInit(): void {
    this.service.siblingData$.subscribe((res)=>{
      console.log("res ",res);
      this.childOneData=res;
    })
  }
  public addData(value:string)
    {
    this.newEvent.emit(value);
  }

}
