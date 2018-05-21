import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  //aqui pongo el nombre del evento q el padre este escuchando
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router:Router ) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    // this.router.navigate( ['/heroe', this.indice] )

    //aqui se llama al metodo verHeroe(i) del padre
    this.heroeSeleccionado.emit(this.indice);
  }

}
