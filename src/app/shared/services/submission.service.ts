import { Injectable } from '@angular/core';

@Injectable()
export class SubmissionService {
  private lastSubmitted : string = "";

  constructor() { }

  getLastSubmitted(){ return this.lastSubmitted }

  submitForm(submission : string) {
  	this.lastSubmitted = submission;
  	//would sanatize input and send to server here

  }
}
