 import { NgModule } from '@angular/core';
 import { PokemonListPage } from './pokemon-list.page';
 import { PokemonListPageRoutingModule } from './pokemon-list-routing.module';

 @NgModule({
   imports: [
     // importa o componente standalone
     PokemonListPage,
     // importa o roteamento children
     PokemonListPageRoutingModule
   ]
 })
 export class PokemonListPageModule {}