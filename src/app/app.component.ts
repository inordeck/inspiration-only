/*  import {  } from '';  */
import { Component } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';

@Component({
	selector: 'lsl-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'Inspiration Only';
}