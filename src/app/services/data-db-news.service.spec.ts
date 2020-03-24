import { TestBed } from '@angular/core/testing';

import { DataDbNewsService } from './data-db-news.service';

describe('DataDbNewsService', () => {
  let service: DataDbNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataDbNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
