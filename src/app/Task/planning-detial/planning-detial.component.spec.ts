import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningDetialComponent } from './planning-detial.component';

describe('PlanningDetialComponent', () => {
  let component: PlanningDetialComponent;
  let fixture: ComponentFixture<PlanningDetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningDetialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
