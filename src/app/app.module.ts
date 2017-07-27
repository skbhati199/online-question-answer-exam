import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Firebase module
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
// Service
import {AuthService} from './provider/auth.service';
import { WindowService } from './provider/window.service';

// Guard Service
import {AuthGuard} from './core/guard.guard';
// Componenet
import { AppComponent } from './app.component';
import { GoogleAuthComponent } from './google-auth/google-auth.component';
import { FacebookAuthComponent } from './facebook-auth/facebook-auth.component';
import { TwitterAuthComponent } from './twitter-auth/twitter-auth.component';
import { GithubAuthComponent } from './github-auth/github-auth.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';

// Update Auth Guard
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleAuthComponent,
    FacebookAuthComponent,
    TwitterAuthComponent,
    GithubAuthComponent,
    PhoneLoginComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [AuthService,WindowService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
