import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from "firebase";

import { Observable } from 'rxjs/Observable';

import { AppRoutingModule } from '../../app.routing.module';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-nominate',
  templateUrl: './nominate.component.html',
  styleUrls: ['./nominate.component.css']
})

export class NominateComponent implements OnInit {

	public user: Observable<firebase.User>;

	constructor(
		private router: Router,
		private auth: AuthService
	) { }



	getUserId() {
		if (firebase.auth().currentUser) {
  			// User is signed in.
  			return firebase.auth.$key
		} else {
  			// No user is signed in.
  			this.router.navigate(['/signup'])
		}
	}

	ngOnInit() { 

	}

}
