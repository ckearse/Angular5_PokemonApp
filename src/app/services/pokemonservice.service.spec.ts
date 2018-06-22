import { TestBed, inject } from '@angular/core/testing';

import { PokemonserviceService } from './pokemonservice.service';

describe('PokemonserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonserviceService]
    });
  });

  it('should be created', inject([PokemonserviceService], (service: PokemonserviceService) => {
    expect(service).toBeTruthy();
  }));
});
