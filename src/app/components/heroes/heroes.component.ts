import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  //le paso al constructor un argumento llamado _heroesService de tipo HeroesService
  //con esto el servicio queda listo para usar
  constructor( private _heroesService:HeroesService,
                private router:Router ) {

  }

  //ngOnInit es para cuando ya esta toda la pagina renderizada
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe( indice:number ){
    this.router.navigate( ['/heroe', indice] )
  }

}
