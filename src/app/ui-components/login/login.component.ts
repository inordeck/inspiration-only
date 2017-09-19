/*  import {  } from '';  */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

/* services */
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(
		public auth: AuthService,
		private router: Router
  	) { }

  ngOnInit(): void {
  }

  // social login
  loginWithGoogle() {
  	this.auth.loginWithGoogle()
  		.then(() => this.afterLogin());
  }

  afterLogin(): void {
  	console.log('logged in')
  	this.router.navigate(['/send-story']);
  }

}
