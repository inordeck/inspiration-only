/*  import {  } from '';  */
import { NgModule, Component, Injectable, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SharedModule } from './ui-components/nominate/shared/shared.module';

/* recaptcha */
import { RecaptchaModule } from 'ng-recaptcha';

/* ROUTING */
import { AppRoutingModule } from './app.routing.module';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { NavComponent } from './ui-components/nav/nav.component';
import { WelcomeComponent } from './ui-components/welcome/welcome.component';
import { SignupComponent } from './ui-components/signup/signup.component';
import { SendStoryComponent } from './ui-components/send-story/send-story.component';
import { NominateComponent } from './ui-components/nominate/nominate.component';
import { FooterComponent } from './ui-components/footer/footer.component';
import { VolumeOneComponent } from './volumes/volume-one/volume-one.component';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    NavComponent,
    SendStoryComponent,
    NominateComponent,
    FooterComponent,
    VolumeOneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CoreModule,
    SharedModule,
    RecaptchaModule.forRoot(),
    NgbModule.forRoot(),
  ],
  bootstrap: [ AppComponent ],
  providers: [ AuthService ],
  schemas: [ NO_ERRORS_SCHEMA ]
})

export class AppModule { }
