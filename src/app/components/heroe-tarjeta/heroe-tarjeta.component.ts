import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

//esto quiere decir que la propiedad heroe puede venir de afuera
  @Input() heroe:Heroe;
  @Input() indice:number;

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  verHeroe( indice:number ){
    this.router.navigate( ['/heroe', this.indice] )
  }

}
