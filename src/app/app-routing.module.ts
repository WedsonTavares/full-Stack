import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'pokemon-list',
    loadComponent: () =>
      import('./features/pokemon-list/pokemon-list.page').then(m => m.PokemonListPage)
  },
  {
    path: 'pokemon-detail/:id',
    loadComponent: () =>
      import('./features/pokemon-detail/pokemon-detail.page').then(
        m => m.PokemonDetailPage
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
