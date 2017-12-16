import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../shared/services/submission.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  submittedReview : string;

  constructor(private submissionService : SubmissionService) { }

  ngOnInit() {
  	this.submittedReview = this.submissionService.getLastSubmitted();
  }

}
