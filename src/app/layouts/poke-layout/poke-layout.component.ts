import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';

@Component({
  selector: 'app-poke-layout',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './poke-layout.component.html',
  styleUrl: './poke-layout.component.css'
})
export class PokeLayoutComponent {

}
