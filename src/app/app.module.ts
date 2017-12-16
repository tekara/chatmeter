import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReviewComponent } from './review/review.component';

import { SubmissionService } from './shared/services/submission.service';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ SubmissionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
