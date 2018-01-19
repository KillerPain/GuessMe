import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormComponent } from '../form/form.component';
import { CreateComponentService } from './create-component.service';

@Component({
  selector: 'gm-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  name: string;
  questions = [];

  constructor(private service: CreateComponentService, private dialog: MatDialog) { 
  }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(FormComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.questions.push(result);
      }
    });
  }

  createGame() {
    this.service.createGame(this.name, this.questions);
  }
}
