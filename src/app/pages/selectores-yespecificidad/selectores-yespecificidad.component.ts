import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-selectores-yespecificidad',
  imports: [CommonModule],
  templateUrl: './selectores-yespecificidad.component.html',
  styleUrl: './selectores-yespecificidad.component.css'
})
export class SelectoresYespecificidadComponent {
 a = 1;
 nombre = 'Juan';
 listanombres= ['Ana', 'Luis', 'Carlos', 'María', 'Jorge'];
 incognita = '¿Cuál es mi valor?';


 sumar(): void {
  this.a += 1;}

 mensaje(mesaje:string): void {
  console.log(mesaje);
 }

 ngOnInit(): void {
  this.mensaje('Componente de selectores y especificidad cargado');
 }
}
