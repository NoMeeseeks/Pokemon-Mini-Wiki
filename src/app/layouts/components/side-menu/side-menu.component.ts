import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface menuItem {
  nombre: string;
  ruta: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, NgFor],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  public menu: menuItem[] = [
    {
      nombre: 'tipos',
      ruta: 'tipos'
    },
    {
      nombre: 'habilidades',
      ruta: 'habilidades'
    }];
}
