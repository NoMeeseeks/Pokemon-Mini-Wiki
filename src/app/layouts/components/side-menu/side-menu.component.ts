import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

export interface menuItem {
  nombre: string;
  ruta: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  public menu: menuItem[] = [
    {
      nombre: 'tipos',
      ruta: ''
    },
    {
      nombre: 'habilidades',
      ruta: ''
    }];
}
