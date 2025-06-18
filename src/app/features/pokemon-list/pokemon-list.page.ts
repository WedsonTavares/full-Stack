import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ],
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage {
  pokemons: any[] = [];

  constructor() {}

  ngOnInit() {
    // carregue a lista de pokémons
  }

  openDetail(pokemon: any) {
    // navegação para detalhe
  }
}
