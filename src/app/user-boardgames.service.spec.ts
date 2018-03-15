import { TestBed, inject } from '@angular/core/testing';

import { UserBoardgamesService } from './user-boardgames.service';

describe('UserBoardgamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserBoardgamesService]
    });
  });

  it('should be created', inject([UserBoardgamesService], (service: UserBoardgamesService) => {
    expect(service).toBeTruthy();
  }));
});
