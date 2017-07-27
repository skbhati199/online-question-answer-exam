import { Component, OnInit } from '@angular/core';
import { AuthService } from '../provider/auth.service';

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.css']
})
export class GoogleAuthComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  loginWithGoogle(){
    this.authService.loginWithGoogle();
  }

  logout(){
    this.authService.logout();
  }

}
