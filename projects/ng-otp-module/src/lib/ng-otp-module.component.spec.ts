import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOtpModuleComponent } from './ng-otp-module.component';

describe('NgOtpModuleComponent', () => {
  let component: NgOtpModuleComponent;
  let fixture: ComponentFixture<NgOtpModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOtpModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOtpModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
