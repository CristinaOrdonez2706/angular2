import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-calculo-viaje',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './calculo-viaje.component.html',
  styleUrl: './calculo-viaje.component.scss'
})
export class CalculoViajeComponent {
  @Input() resultado: any;
}
