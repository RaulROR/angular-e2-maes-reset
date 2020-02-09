import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  valor1:string ='10';
  valor2:string = '20';
  resultadoP:number;


  captaResultado(event){
      this.resultadoP = event;

  }

reset(event){
      
       this.valor1='0';
       this.valor2='0';
       this.resultadoP=0;
  }


}
