import { Component, OnInit } from '@angular/core';
import { AuthService } from '../provider/auth.service'

@Component({
  selector: 'app-github-auth',
  templateUrl: './github-auth.component.html',
  styleUrls: ['./github-auth.component.css']
})
export class GithubAuthComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }


  loginWithGitHub(){
    this.authService
    .loginWithGithub();
  }

  logoutWithGitHub(){
    this.authService
    .logout();
  }

}
