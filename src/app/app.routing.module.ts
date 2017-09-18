/*  import {  } from '';  */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

/* components */
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: '', component: WelcomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
];

@NgModel ({
	imports: [ RouterModule.forRoot(routes, { enableTracing: true }),CommonModule ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }