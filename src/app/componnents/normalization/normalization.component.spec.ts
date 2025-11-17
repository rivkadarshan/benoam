import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalizationComponent } from './normalization.component';

describe('NormalizationComponent', () => {
  let component: NormalizationComponent;
  let fixture: ComponentFixture<NormalizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalizationComponent]
    });
    fixture = TestBed.createComponent(NormalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
