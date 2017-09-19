/*  import {  } from '';  */
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

	authState: any = null;

	constructor(
		private afAuth: AngularFireAuth,
		private db: AngularFireDatabase,
		private router: Router) {

		this.afAuth.authState.subscribe((auth) => {
			this.authState = auth
		});
	}

	// returns true if user is logged in
	get authenticated(): boolean {
		return this.authState !== null;
	}

	// returns current user data
	get currentUser(): any {
		return this.authenticated ? this.authState: null;
	}

	// returns current user observable
	get currentUserObservble(): any {
		return this.afAuth.authState;
	}

	// return current user id
	get currentUserId(): string {
		return this.authenticated ? this.authState.uid: '';
	}

	// social auth
	loginWithGoogle() {
		const provider = new firebase.auth.GoogleAuthProvider()
		return  this.socialSignIn(provider);
	}

	private socialSignIn(provider) {
		return this.afAuth.auth.signInWithRedirect(provider)
			.then((credential) => {
				this.authState = credential.user
				this.updateUserData()
			})
			.catch(error => console.log(error));
	}

	// email / password auth
	// signup
	emailSignup(email: string, password: string) {
		return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
			.then((user) => {
				this.authState = user
				this.updateUserData()
			})
			.catch(error => console.log(error));
	}

	//login
	emailLogin(email: string, password: string) {
		return this.afAuth.auth.signInWithEmailAndPassword(email, password)
			.then((user) => {
				this.authState = user
				this.updateUserData()
			})
			.catch(error => console.log(error));
	}

	// sends email to reset password
	resetPassword(email: string) {
		const fbAuth = firebase.auth();
		return fbAuth.sendPasswordResetEmail(email)
			.then(() => console.log('reset email sent'))
			.catch(error => console.log(error));
	}

	// signout
	signOut(): void {
		this.afAuth.auth.signOut();
		this.router.navigate(['/'])
	}

	// get all users
	getUsers() {
		return this.db.list('/users');
	}

	// helper functions
	private updateUserData(): void {
		// writes user name and email to db
		const path = `users/${this.currentUserId}`;
		const data = {
			email: this.authState.email,
			firstName: this.authState.firstName,
			lastName: this.authState.lastName
		}
		this.db.object(path).update(data)
			.catch(error => console.log(error));
	}

}
