/*  import {  } from '';  */
import { NgModule, Component, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';


/*  ANGULAR FIRE 2 */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

/* NG BOOTSTRAP */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* SERVICES */
import { AuthService } from './shared/auth/auth.service';

/* ROUTING */
import { AppRoutingModule } from './app.routing.module';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SendStoryComponent } from './send-story/send-story.component';
import { StorySoFarComponent } from './story-so-far/story-so-far.component';
import { NominateComponent } from './nominate/nominate.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    NavComponent,
    SendStoryComponent,
    StorySoFarComponent,
    NominateComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'inspiration-only-dev'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),

  ],
  providers: [ AuthService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
