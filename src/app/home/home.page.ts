import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
precoDaGasolina: number = 0;
distanciaViagem: number = 0;
consumoDoCarro: number = 0;
total: number = 0;

  constructor() {}
calcularCustoDaViagem(){
  this.total = (this.distanciaViagem / this.consumoDoCarro) * this.precoDaGasolina;
}
}