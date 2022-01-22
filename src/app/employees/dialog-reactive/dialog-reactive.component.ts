import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddEmployeeReactiveComponent } from '../add-employee-reactive/add-employee-reactive.component';

@Component({
  selector: 'app-dialog-reactive',
  templateUrl: './dialog-reactive.component.html',
  styleUrls: ['./dialog-reactive.component.scss']
})
export class DialogReactiveComponent implements OnInit {

  dialogRef: MatDialogRef <any> ;
  constructor(public dialog: MatDialog) { }

  // openDialog() {
  // this.dialog.open(AddEmployeeReactiveComponent);
  // }
  openDialog() {
    const dialogRef = this.dialog.open(AddEmployeeReactiveComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    //this.dialogRef.updateSize('10%', '80%');
  }

}
