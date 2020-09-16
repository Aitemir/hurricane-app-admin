import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInTableComponent } from './check-in-table.component';

describe('CheckInTableComponent', () => {
  let component: CheckInTableComponent;
  let fixture: ComponentFixture<CheckInTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
