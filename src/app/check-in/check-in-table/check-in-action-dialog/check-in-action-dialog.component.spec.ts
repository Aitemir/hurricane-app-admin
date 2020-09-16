import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInActionDialogComponent } from './check-in-action-dialog.component';

describe('CheckInActionDialogComponent', () => {
  let component: CheckInActionDialogComponent;
  let fixture: ComponentFixture<CheckInActionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInActionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInActionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
