/*  import {  } from '';  */
import { NgModule, Component, Injectable, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { CoreModule } from './shared/auth/core.module';

/* ROUTING */
import { AppRoutingModule } from './app.routing.module';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { NavComponent } from './ui-components/nav/nav.component';
import { WelcomeComponent } from './ui-components/welcome/welcome.component';
import { SignupComponent } from './ui-components/signup/signup.component';
import { LoginComponent } from './ui-components/login/login.component';
import { SendStoryComponent } from './ui-components/send-story/send-story.component';
import { StorySoFarComponent } from './ui-components/story-so-far/story-so-far.component';
import { NominateComponent } from './ui-components/nominate/nominate.component';
import { FooterComponent } from './ui-components/footer/footer.component';
import { VolumeOneComponent } from './volumes/volume-one/volume-one.component';

export const firebaseConfig = environment.firebaseConfig;

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
    VolumeOneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CoreModule,
    NgbModule.forRoot(),
  ],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})

export class AppModule { }
