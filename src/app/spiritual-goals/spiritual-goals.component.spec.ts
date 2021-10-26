import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritualGoalsComponent } from './spiritual-goals.component';

describe('SpiritualGoalsComponent', () => {
  let component: SpiritualGoalsComponent;
  let fixture: ComponentFixture<SpiritualGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiritualGoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritualGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
