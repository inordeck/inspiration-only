/*  import {  } from '';  */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()

export class AuthGuard implements CanActivate {
	constructor(
		private afAuth: AngularFireAuth,
		private router: Router
	) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | boolean {

			return this.afAuth.authState
				.take(1)
				.map(user => !!user)
				.do(loggedIn => {
					if (!loggedIn) {
						console.log('access denied')
						this.router.navigate(['/login']);
					}
				})
	}

}