import { Component, OnInit, Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'gm-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
 
  loginForm: FormGroup;
  registerFrom: FormGroup;
  active = false;

  constructor(private service: AuthService, private fb: FormBuilder, private router: Router) {
    this.createLoginForm();
   }

  createLoginForm() {
    this.loginForm = this.fb.group({ // <-- the parent FormGroup
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(3)] ]
    });
    this.registerFrom = this.fb.group({ // <-- the parent FormGroup
      firstname: ['', [Validators.required, Validators.minLength(4)] ],
      lastname: ['', [Validators.required, Validators.minLength(4)] ],
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(3)] ]
    });
  }
  ngOnInit() {
  }


  onLoginSubmit() {
    this.service.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
    this.router.navigate(['main']);
  }

  onRegisternSubmit() {
    this.service.register(this.registerFrom.get('firstname').value,
                          this.registerFrom.get('lastname').value,
                          this.registerFrom.get('password').value,
                          this.registerFrom.get('email').value);
  }

  register() {
    this.active = (this.active ? false : true);
  }

}
