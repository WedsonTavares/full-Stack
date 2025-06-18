 import { NgModule } from '@angular/core';
 import { PokemonDetailPage } from './pokemon-detail.page';
 import { PokemonDetailPageRoutingModule } from './pokemon-detail-routing.module';

 @NgModule({
   imports: [
     PokemonDetailPage,
     PokemonDetailPageRoutingModule
   ]
 })
 export class PokemonDetailPageModule {}