import { TestBed } from '@angular/core/testing';

import { AuthorizeServiceService } from './authorize-service.service';

describe('AuthorizeServiceService', () => {
  let service: AuthorizeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
