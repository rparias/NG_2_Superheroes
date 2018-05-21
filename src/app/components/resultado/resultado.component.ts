import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor( private router:Router,
              private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService ) {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroes( params['termino'] );
    } );
  }

  ngOnInit( ) {
  }

  verHeroe( indice:number ){
    this.router.navigate( ['/heroe', indice] )
  }

}
