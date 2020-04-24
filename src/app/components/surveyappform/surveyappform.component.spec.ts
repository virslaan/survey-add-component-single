import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyappformComponent } from './surveyappform.component';

describe('SurveyappformComponent', () => {
  let component: SurveyappformComponent;
  let fixture: ComponentFixture<SurveyappformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyappformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyappformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
