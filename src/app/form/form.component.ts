import { Component, OnInit, Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'gm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  questionForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    public dialogRef: MatDialogRef<FormComponent>) {
    this.createGameForm();
  }


  createGameForm() {
    this.questionForm = this.fb.group({ // <-- the parent FormGroup
      url: ['', [Validators.required] ],
      startTime: ['', [Validators.required] ],
      finishTime: ['', [Validators.required, Validators.min(1)] ],
      answer1: ['', [Validators.required, Validators.minLength(1)] ],
      answer2: ['', [Validators.required, Validators.minLength(1)] ],
      answer3: ['', [Validators.required, Validators.minLength(1)] ],
      answer4: ['', [Validators.required, Validators.minLength(1)] ],
      correct: "",
    });
  }

  ngOnInit() {
  }

  createQuestion() {
    this.dialogRef.close(this.buildQuestion());
  }

  buildQuestion() {
    var question: any = {};
    question.url = this.questionForm.get('url').value;
    question.startTime = this.questionForm.get('startTime').value;
    question.finishTime = this.questionForm.get('finishTime').value;
    question.optionA = this.questionForm.get('answer1').value;
    question.optionB = this.questionForm.get('answer2').value;
    question.optionC = this.questionForm.get('answer3').value;
    question.optionD = this.questionForm.get('answer4').value;
    question.correct = this.questionForm.get('correct').value;
    return question;
  }
}
