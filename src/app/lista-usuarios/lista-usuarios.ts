import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css'
})
export class ListaUsuarios {

  usuarios = [
    { id: 1, nombre: 'Sarha', apellido: 'Zapata Gomez' },
    { id: 2, nombre: 'Camilo', apellido: 'Ruiz Ausecha' },
    { id: 3, nombre: 'Jubelit ', apellido: 'Zapata Ruiz' },
    { id: 4, nombre: 'Flader ', apellido: 'Zapata Ruiz' }

  ];
}