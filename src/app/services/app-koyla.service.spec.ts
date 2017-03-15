import { TestBed, inject } from '@angular/core/testing';

import { AppKoylaService } from './app-koyla.service';

describe('AppKoylaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppKoylaService]
    });
  });

  it('should ...', inject([AppKoylaService], (service: AppKoylaService) => {
    expect(service).toBeTruthy();
  }));
});
