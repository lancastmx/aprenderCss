import { ListaNombres } from './data/listaNombres';
import { Component, OnInit } from '@angular/core';
import { LISTA_NOMBRES } from './data/listas';
@Component({
  selector: 'app-aprender-ts',
  standalone: true,
  imports: [],
  templateUrl: './aprender-ts.component.html',
  styleUrl: './aprender-ts.component.css'
})
export class AprenderTsComponent implements OnInit {
  nombre: string = 'Juan';
  edad: number = 30;
  esDesarrollador: boolean = true;

  a: number = 2;
  b: number = 3;
  resultado: number | undefined;

  ListaNombres: ListaNombres[] = LISTA_NOMBRES;

  suma(a: number, b: number): number {
    return a + b;
  }
  resta(a: number, b: number): number {
    return a - b;
  }
  multiplicacion(a: number, b: number): number {
    return a * b;
  }
  division(a: number, b: number): number {
    return a / b;
  }

  funcion(){
    console.log('Esta es una función de ejemplo');
  }
  ngOnInit(): void {
    this.funcion();
    this.resultado = this.suma(this.a, this.b);
    console.log('El resultado de la suma es:', this.resultado);
    console.log('El nombre es:', this.nombre);
    console.log('La edad es:', this.edad);
    console.log('¿Es desarrollador?', this.esDesarrollador);
    console.log(`Información del desarrollador: Nombre: ${this.nombre}, Edad: ${this.edad}, ¿Desarrollador?: ${this.esDesarrollador}`);
    this.checkIfNumberIsFive();
    this.ListaNom();
  }

   checkIfNumberIsFive() {
    if ( this.a === 5) {
      console.log('El número es 5');
    } else {
      console.log('El número no es 5');
    }
  }
  variabledeconocida: unknown = 4;

  ListaNom(){
    this.ListaNombres.forEach(item => {
      console.log(item.nombre);
    });
  }

}