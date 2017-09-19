/*  import {  } from '';  */
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
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
	validationMessages = {
		'email': {
			'required': 'email is required',
			'email': 'email must be a valid email'
		},
		'password': {
			'required': 'password is required',
			'pattern': 'password must include both letters and numbers',
			'minlength': 'password must be at least 6 charachters long',
			'maxlength': 'password must be less than 16 characters long'
		}
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

  onValueChanged(data?: any) {
  	if (!this.userForm) { return; }
	  	const form = this.userForm;
	  	for (const field in this.formErrors) {
	  		if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
	  			this.formErrors[field] = '';
	  			const control = form.get(field);
	  			if (control && control.dirty && !control.valid) {
	  				const messages = this.validationMessages[field];
	  				for (const key in control.errors) {
	  					if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
	  						this.formErrors[field] += messages[key] + ' ';
  					}
  				}
  			}
  		}
  	}
  }

}
