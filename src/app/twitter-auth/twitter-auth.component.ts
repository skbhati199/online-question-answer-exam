import { Component, OnInit } from '@angular/core';

import {AuthService} from '../provider/auth.service';

@Component({
  selector: 'app-twitter-auth',
  templateUrl: './twitter-auth.component.html',
  styleUrls: ['./twitter-auth.component.css']
})
export class TwitterAuthComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  loginWithTwitter(){
    this.authService
    .loginWithTwitter();
  }

  logoutWithTwitter(){
    this.authService.logout();
  }

}
