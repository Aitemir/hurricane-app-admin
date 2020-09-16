import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInAddressDialogComponent } from './check-in-address-dialog.component';

describe('CheckInAddressDialogComponent', () => {
  let component: CheckInAddressDialogComponent;
  let fixture: ComponentFixture<CheckInAddressDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInAddressDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInAddressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
