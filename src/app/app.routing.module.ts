/*  import {  } from '';  */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

/* components */
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SendStoryComponent } from './send-story/send-story.component';
import { StorySoFarComponent } from './story-so-far/story-so-far.component';
import { NominateComponent } from './nominate/nominate.component';

const routes: Routes = [
	{ path: '', component: WelcomeComponent },
	{ path: 'welcome', component: WelcomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'send-story', component: SendStoryComponent },
	{ path: 'story-so-far', component: StorySoFarComponent },
	{ path: 'nominate', component: NominateComponent }
];

@NgModule ({
	imports: [ RouterModule.forRoot(routes, { enableTracing: true }),CommonModule ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }