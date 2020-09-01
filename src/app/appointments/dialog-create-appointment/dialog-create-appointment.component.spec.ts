import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateAppointmentComponent } from './dialog-create-appointment.component';

describe('DialogCreateAppointmentComponent', () => {
  let component: DialogCreateAppointmentComponent;
  let fixture: ComponentFixture<DialogCreateAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
