import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdygToolbarComponent } from './pdyg-toolbar.component';

describe('PdygToolbarComponent', () => {
  let component: PdygToolbarComponent;
  let fixture: ComponentFixture<PdygToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdygToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdygToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
