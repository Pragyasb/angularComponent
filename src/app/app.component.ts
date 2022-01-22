import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentTxtOne:any;
  parentTxtTwo:any;
  childValueOne:any;
  childValueTwo:any;

  showChildDataOne(event)
  {
     this.childValueOne=event;

  }
  showChildDataTwo(event)
  {
     this.childValueTwo=event;

  }
}
