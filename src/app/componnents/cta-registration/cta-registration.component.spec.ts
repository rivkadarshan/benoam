import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaRegistrationComponent } from './cta-registration.component';

describe('CtaRegistrationComponent', () => {
  let component: CtaRegistrationComponent;
  let fixture: ComponentFixture<CtaRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtaRegistrationComponent]
    });
    fixture = TestBed.createComponent(CtaRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
