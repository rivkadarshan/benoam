import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsandAnswersComponent } from './questionsand-answers.component';

describe('QuestionsandAnswersComponent', () => {
  let component: QuestionsandAnswersComponent;
  let fixture: ComponentFixture<QuestionsandAnswersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsandAnswersComponent]
    });
    fixture = TestBed.createComponent(QuestionsandAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
