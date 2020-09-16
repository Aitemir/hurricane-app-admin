import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInWarningDialogComponent } from './check-in-warning-dialog.component';

describe('CheckInWarningDialogComponent', () => {
  let component: CheckInWarningDialogComponent;
  let fixture: ComponentFixture<CheckInWarningDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInWarningDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInWarningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
