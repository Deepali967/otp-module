import { TestBed } from '@angular/core/testing';

import { NgOtpModuleService } from './ng-otp-module.service';

describe('NgOtpModuleService', () => {
  let service: NgOtpModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgOtpModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
