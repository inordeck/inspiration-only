import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  constructor(
  	public auth: AuthService
  ) { }

  ngOnInit() {
  }

  signOut() {
  	this.auth.signOut();
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

}
