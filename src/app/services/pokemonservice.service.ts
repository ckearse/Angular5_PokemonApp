import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonService {

  private url = 'http://pokeapi.co/api/v2/pokemon/';

  getPokemon(): Observable<any> {
    return this._http.get<any>(this.url);
  }

  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
}
