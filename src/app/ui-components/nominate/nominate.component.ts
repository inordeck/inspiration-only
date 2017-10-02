/*  import {  } from '';  */
import { Component, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';

import { NominateSubmission } from '../../shared/models/nominate-submissons';

@Component({
  selector: 'app-nominate',
  templateUrl: './nominate.component.html',
  styleUrls: ['./nominate.component.css']
})

export class NominateComponent implements AfterViewChecked {

  model = new NominateSubmission();
  submitted = false;
  charsLeft = 250;
  contactForm: NgForm;

  @ViewChild('contactForm') currentForm: NgForm;
  submittedForm: any; // we will get rid of this later
  formErrors = {
    'contactName': '',
    'contactEmail': '',
    'contactMessage': ''
  };

  validationMessages = {
    'contactName': {
      'required': 'Name is required.'
    },
    'contactEmail': {
      'required': 'Email is required.',
      'validEmail': 'Email must be in a valid format.'
    },
    'contactMessage': {
      'required': 'A message is required.'
    }
  };

  constructor() {}

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.contactForm) { return; }
    this.contactForm = this.currentForm;
    if (this.contactForm) {
      this.contactForm.valueChanges
        .subscribe((data) => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.contactForm) { return; }
    const form = this.contactForm.form;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit(captchaResponse: string) {
    this.model.captcha = captchaResponse;
    this.submittedForm = JSON.stringify(this.model, null, 4);
    this.submitted = true;
  }

  countChars(event: any) {
    this.charsLeft = 250 - event.target.value.length;
  }

}