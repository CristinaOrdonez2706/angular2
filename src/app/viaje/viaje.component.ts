import { Component, NgModule } from '@angular/core';
import { Viaje } from '../models/viaje.model';
import { ViajeService } from '../viaje.service';
import { RouterModule } from '@angular/router';
import { CalculoViajeComponent } from '../calculo-viaje/calculo-viaje.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-viaje',
  standalone: true,
  imports: [RouterModule, CalculoViajeComponent, FormsModule],
  templateUrl: './viaje.component.html',
  styleUrl: './viaje.component.scss'
})
export class ViajeComponent {
  viaje: Viaje = {
    distancia: 0,
    kmPorGalon: 0,
    costoGalon: 0,
    costoPeaje: 0,
  
  };

  resultado: any;

  constructor(private viajeService: ViajeService) {}

  calcularViaje(formvalue: Viaje) {
    this.resultado = this.viajeService.calcularCostoViaje(formvalue);
    console.log(this.resultado)
  }

}
