import { TestBed } from '@angular/core/testing';

import { DeviceDetectorService } from './ngx-device-detector.service';

describe('DeviceDetectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceDetectorService = TestBed.get(DeviceDetectorService);
    expect(service).toBeTruthy();
  });
});