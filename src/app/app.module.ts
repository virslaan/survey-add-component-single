import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormControl }   from '@angular/forms';
import { AppComponent } from './app.component';
import { Choices } from 'src/app/choices';
import { Question } from 'src/app/question';

import { FormComponent } from './components/form/form.component';
import{ReactiveFormsModule} from '@angular/forms';
import { SurveyappformComponent } from './components/surveyappform/surveyappform.component'
@NgModule({
  declarations: [
    AppComponent,FormComponent, SurveyappformComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
