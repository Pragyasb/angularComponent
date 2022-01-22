import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { WebserviceService } from '../services/webservice.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {
  @Input() parentValueTwo:'';
  @Output() newEvent=new EventEmitter<string>();
    childTwoData:'';
  constructor(private service: WebserviceService) { }

  ngOnInit(): void {
  }
  sendSibData(data:string)
  {
    this.service.sendData(data);
  }
  addNewItem(val:string)
  {
    this.newEvent.emit(val);
  }
}
