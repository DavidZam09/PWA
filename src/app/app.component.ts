import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor1: any;
  valor2: any;
  resultado: any;
  opcion1 = false;
  opcion2 = false;
  opcion3 = false;
  opcion4 = false;
  slider1 = 0;
  slider2 = 0;
  slider3 = 0;
  suma = 0;

  /*operacionSeleccionada: string = 'suma';
  tipoOperaciones = [
    'suma',
    'resta',
    'multiplicacion',
    'division',
  ];*/
  /*operaciones = [
    { valor: 'suma', muestraValor: 'Sumar' },
    { valor: 'resta', muestraValor: 'Restar' },
    { valor: 'multiplicacion', muestraValor: 'Multiplicar' },
    { valor: 'division', muestraValor: 'Dividir' }
  ]
  seleccionada: string = this.operaciones[0].valor;
  */
  operar() {
    /* switch (this.seleccionada) {
       case 'suma': this.resultado = this.valor1 + this.valor2;
         break;
       case 'resta': this.resultado = this.valor1 - this.valor2;
         break;
       case 'multiplicacion': this.resultado = this.valor1 * this.valor2;
         break;
       case 'division': this.resultado = this.valor1 / this.valor2;
         break;
     }*/
    this.resultado = '';
    if (this.opcion1) {
      let ope = this.valor1 + this.valor2;
      this.resultado += `La suma es ${ope}`;
    }
    if (this.opcion2) {
      let ope = this.valor1 - this.valor2;
      this.resultado += `La resta es ${ope}`;
    }
    if (this.opcion3) {
      let ope = this.valor1 * this.valor2;
      this.resultado += `La multiplicacion es  ${ope} `;
    }
    if (this.opcion4) {
      let ope = this.valor1 / this.valor2;
      this.resultado += `La divicion es  ${ope} `;
    }
  }
  cambiar() {
    this.suma = this.slider1 + this.slider2 + this.slider3;
  }




}
