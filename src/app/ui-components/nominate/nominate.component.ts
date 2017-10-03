/*  import {  } from '';  */
import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-nominate',
  templateUrl: './nominate.component.html',
  styleUrls: ['./nominate.component.css']
})

export class NominateComponent implements OnInit {

  constructor(private http: Http) { }

  sendEmail() {
    let url = `https://us-central1-inspiration-only-dev.cloudfunctions.net/httpEmail`
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    params.set('to', 'user@example.com');
    params.set('from', 'octomoose@inspiration-only.com');
    params.set('subject', 'You have been nominated to participate in a collaborative story.');
    params.set('content', 'Hello World');
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
