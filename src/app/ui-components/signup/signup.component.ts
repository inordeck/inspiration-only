/*  import {  } from '';  */
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

/* services */
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	userForm: FormGroup;
	newUser = true;
	passReset = false;
	formErrors = {
		'email': '',
		'password': ''
	};

	constructor(
		private auth: AuthService,
    private router: Router
  	) { }

  ngOnInit() {
  }

  toggleForm() {
  	this.newUser = !this.newUser;
  }

  // social login
  loginWithGoogle(): void {
  	this.auth.loginWithGoogle()
  		.then(() => this.afterLogin());
  }

  signup(): void {
  	this.auth.emailSignup(this.userForm.value['email'], this.userForm.value['password'])
  }

  login(): void {
  	this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password'])
  }

  resetPassword() {
  	this.auth.resetPassword(this.userForm.value['email'])
  		.then(() => this.passReset = true)
  }

  afterLogin(): void {
    console.log('logged in')
    this.router.navigate(['/send-story']);
  }

}
