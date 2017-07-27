import { Component, OnInit } from '@angular/core';

import { AuthService } from '../provider/auth.service';

@Component({
  selector: 'app-facebook-auth',
  templateUrl: './facebook-auth.component.html',
  styleUrls: ['./facebook-auth.component.css']
})
export class FacebookAuthComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  loginWithFacebook(){
    this.authService.loginWithFacebook();
  }

  logoutWithFacebook(){
    this.authService.logout();
  }

}
