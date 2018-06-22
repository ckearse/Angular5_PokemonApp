import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemonservice.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(private _pokemonService: PokemonService) { }

  public pokemons: Observable<any>;

  ngOnInit() {
    const pokemonObservable = this._pokemonService.getPokemon();

    pokemonObservable.subscribe(data => {
      console.log(data);
      this.pokemons = data.results;
    });
  }

}
