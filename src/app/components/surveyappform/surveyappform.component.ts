import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-surveyappform',
  templateUrl: './surveyappform.component.html',
  styleUrls: ['./surveyappform.component.css']
})
export class SurveyappformComponent implements OnInit
{
  get options()
  {
        return this.surveyForm.get('options')as FormArray;
  }

  addoptions()
  {
        this.options.push(this.fb.control(''));
        
  }
  





      get choicearray(){
        return <FormArray>this.surveyForm.get('choicearray') as FormArray;
      }

      addchoicearray()
      {
        this.choicearray.push(this.fb.control(''));
      }

      get optionscount()
      {
            return this.surveyForm.get('optionscount')as FormArray;
      }

      addoptionscount(n:number)
      {
            this.optionscount.push(this.fb.control(n));
      }
















constructor(private fb:FormBuilder){}
  
surveyForm:FormGroup;


ngOnInit()
{
  this.fb.array([2]);
  this.surveyForm=this.fb.group({
  surveyName:['',Validators.required],
  questionText:[''],

  options:this.fb.group({
    choiceText:[''],
    count:0
  
    
  })

})
}


onSubmit()
{
      console.log(this.surveyForm.value);
      console.log("XXXXXXXXXXXXXXXXXXXXXXX");
    
}













}
