import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../shared/services/submission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  review : string = "";
  error : string = "";
  limit : number = 100;
  
  constructor(private submissionService : SubmissionService, private router : Router) { }

  ngOnInit() {
  }

  submit(){
  	if(this.valid()){
 		this.submissionService.submitForm(this.review);
 		this.router.navigate(['/review']);
 	}
  }

  valid() : boolean{
  	//Could add in another check for 100 character limit if we really wanted to
  	if(this.review.length == 0){
  		this.error = "You must enter text before submitting.";
  		return false;
  	}

  	return true;
  }

}
