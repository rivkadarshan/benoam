import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainPointsComponent } from './pain-points.component';

describe('PainPointsComponent', () => {
  let component: PainPointsComponent;
  let fixture: ComponentFixture<PainPointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainPointsComponent]
    });
    fixture = TestBed.createComponent(PainPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
