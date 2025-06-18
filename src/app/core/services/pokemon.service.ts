// src/app/core/services/pokemon.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  sprites: { front_default: string };
}

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly API = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  listPokemons(offset = 0, limit = 20): Observable<{ results: Pokemon[] }> {
    return this.http.get<{ results: Pokemon[] }>(
      `${this.API}/pokemon?offset=${offset}&limit=${limit}`
    );
  }

  getPokemonDetail(name: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${this.API}/pokemon/${name}`);
  }
}
