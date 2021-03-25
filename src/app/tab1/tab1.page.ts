import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  pikachu = new Pokemon(
    'Pikachu',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    54
  );
  roudoudou = new Pokemon(
    'Roudoudou',
    'https://www.pokepedia.fr/images/thumb/c/cd/Rondoudou-RFVF.png/636px-Rondoudou-RFVF.png',
    2
  );
  bulbizar = new Pokemon(
    'Bulbizarre',
    'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/644px-Bulbizarre-RFVF.png',
    38
  );
  carapuce = new Pokemon(
    'Carapuce',
    'https://www.pokepedia.fr/images/c/cc/Carapuce-RFVF.png',
    666
  );

  allPokemons: Pokemon[] = [
    this.pikachu,
    this.roudoudou,
    this.bulbizar,
    this.carapuce,
  ];
}
