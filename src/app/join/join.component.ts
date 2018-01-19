import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoinService } from './join.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'gm-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  joinForm: FormGroup;
  constructor(private r: Router, private route: ActivatedRoute, private fb: FormBuilder, private service: JoinService) { 
    this.createJoinForm();
  }


  createJoinForm() {
    this.joinForm = this.fb.group({ // <-- the parent FormGroup
      id: ['', [Validators.required] ],
      name: ['', [Validators.required, Validators.minLength(1)] ]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.joinForm.patchValue({id: params['id']});
    });
  }

  joinGame() {
    this.service.addPlayer(
      this.joinForm.get('id').value,
      this.joinForm.get('name').value
    ).then(data => {
      this.r.navigateByUrl('/game/'+this.joinForm.get('id').value);
    });
  }

}
