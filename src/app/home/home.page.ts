import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router'; // Adicione esta linha

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  pokemons: any[] = [];
  filteredPokemons: any[] = [];
  offset = 0;
  limit = 20;
  searchTerm = '';
  favorites: any[] = [];

  constructor(private router: Router) {} // Injete o Router aqui

  ngOnInit() {
    this.loadPokemons();
  }

  async loadPokemons() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`);
    const data = await response.json();

    const detalhes = await Promise.all(
      data.results.map(async (p: any) => {
        const res = await fetch(p.url);
        return await res.json();
      })
    );

    this.pokemons.push(...detalhes);
    this.applyFilter();
    this.offset += this.limit;
  }

  applyFilter() {
    if (this.searchTerm.trim() === '') {
      this.filteredPokemons = this.pokemons;
    } else {
      this.filteredPokemons = this.pokemons.filter(p =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  onSearchChange(event: any) {
    this.searchTerm = event.detail.value;
    this.applyFilter();
  }

  openDetail(p: any) {
    this.router.navigate(['/pokemon-detail', p.id]); // Navegação para detalhes
  }

  async loadMore(event: any) {
    await this.loadPokemons();
    event.target.complete();
  }

  toggleFavorite(pokemon: any) {
    const index = this.favorites.findIndex(fav => fav.id === pokemon.id);
    if (index > -1) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(pokemon);
    }
  }

  isFavorite(pokemon: any) {
    return this.favorites.some(fav => fav.id === pokemon.id);
  }
  removeCard(pokemon: any) {
  this.pokemons = this.pokemons.filter(pk => pk.id !== pokemon.id);
  this.applyFilter();
}
}