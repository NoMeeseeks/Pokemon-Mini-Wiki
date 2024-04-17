import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-poke-layout',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './poke-layout.component.html',
  styleUrl: './poke-layout.component.css'
})
export class PokeLayoutComponent {

}
