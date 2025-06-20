import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';   
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ],
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController    
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      this.pokemon = await response.json();
    }
  }

  closeDetail() {
    this.navCtrl.back();           
  }
}
