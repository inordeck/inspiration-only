/*  import {  } from '';  */
import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

//services
import { AppRoutingModule } from '../../app.routing.module';

@Component({
  selector: 'app-nominate',
  templateUrl: './nominate.component.html',
  styleUrls: ['./nominate.component.css']
})

export class NominateComponent implements OnInit {

  nominate = <any>{}

  constructor(
    private http: Http,
    private router: Router
  ) { }

  prepEmail() {
    event.preventDefault
    this.sendEmail();
    this.router.navigate(['/volume-one'])
  }

  sendEmail() {
    // email content
    let link = "https://inspiration-only-dev.firebaseapp.com/";
    let message = "";

    let url = `https://us-central1-inspiration-only-dev.cloudfunctions.net/httpEmail`
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': url });
    console.log('send email')
    console.log(headers);

    // eamil params
    params.set('to', this.nominate.inputEmail);
    params.set('from', 'ian.nordeck@gmail.com');
    params.set('subject', 'You have been nominated to participate in a collaborative story.');
    params.set('content', 'Hello ' + this.nominate.firstName + ' ' + this.nominate.LastName + ', ' + this.nominate.personalMessage);

    return this.http.post(url, params, headers)
                    .toPromise()
                    .then( res => {
                      console.log(res)
                    })
                    .catch(err => {
                      console.log(err)
                    })
  }

  ngOnInit() {
  }

}
