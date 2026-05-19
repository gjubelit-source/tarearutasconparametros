import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios {

  usuarios = [
    { id: 1, nombre: 'Sarha', apellido: 'Zapata Gomez' },
    { id: 2, nombre: 'Camilo', apellido: 'Ruiz Ausecha' },
    { id: 3, nombre: 'Jubelit ', apellido: 'Zapata Ruiz' },
    { id: 4, nombre: 'Flader ', apellido: 'Zapata Ruiz' }

  ];

  usuario: any = null;
 

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.usuario = this.usuarios.find(u => u.id === id);

    });
  }

  siguienteUsuario() {
    if (this.usuario) {
      const siguiente = this.usuario.id + 1;
      const usuarioSiguiente = this.usuarios.find(u => u.id === siguiente);
      if (usuarioSiguiente) {
        this.router.navigate([
          '/usuario',
          usuarioSiguiente.id,
          usuarioSiguiente.nombre
        ]);
     }}
 }
}