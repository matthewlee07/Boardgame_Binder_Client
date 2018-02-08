import { TestBed, inject } from '@angular/core/testing';

import { BoardgameService } from './boardgame.service';

describe('BoardgameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardgameService]
    });
  });

  it('should be created', inject([BoardgameService], (service: BoardgameService) => {
    expect(service).toBeTruthy();
  }));
});
