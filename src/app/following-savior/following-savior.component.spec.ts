import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingSaviorComponent } from './following-savior.component';

describe('FollowingSaviorComponent', () => {
  let component: FollowingSaviorComponent;
  let fixture: ComponentFixture<FollowingSaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowingSaviorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingSaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
