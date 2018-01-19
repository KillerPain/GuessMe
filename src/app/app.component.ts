import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'gm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isUser: Boolean = false;

  constructor(private service: AuthService) { }

  ngOnInit() {
    this.isUser = this.service.isLoggedIn();
    console.log(this.isUser);
  }
}
