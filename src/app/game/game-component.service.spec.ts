import { TestBed, inject } from '@angular/core/testing';

import { GameComponentService } from './game-component.service';

describe('GameComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameComponentService]
    });
  });

  it('should be created', inject([GameComponentService], (service: GameComponentService) => {
    expect(service).toBeTruthy();
  }));
});
