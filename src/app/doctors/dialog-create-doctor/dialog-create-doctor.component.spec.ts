import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateDoctorComponent } from './dialog-create-doctor.component';

describe('DialogCreateDoctorComponent', () => {
  let component: DialogCreateDoctorComponent;
  let fixture: ComponentFixture<DialogCreateDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
