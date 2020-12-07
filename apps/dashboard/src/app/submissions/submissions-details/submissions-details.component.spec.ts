import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsDetailsComponent } from './submissions-details.component';

describe('SubmissionsDetailsComponent', () => {
  let component: SubmissionsDetailsComponent;
  let fixture: ComponentFixture<SubmissionsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
