import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  nombre = 'Marcos';
  miArray = [1,2,3,4,5];
  enteroConDecimales = 0.123456789;
  salario = 1234.5;
  pass = "abc123";

  persona = {
    nombre: "Marcos",
    apellidos: "JRS",
    direccion:{
      calle:"Rúa Percebe",
      numero:"13"
    }
  }

  promesa = new Promise( (resolve, reject) => {
      setTimeout(()=>resolve('datos resolved de promesa'),3500 );
    }
  );
  fecha =new Date();

  nombreMalEscrito="Fulanito de tal";
  urlYoutube = "https://www.youtube.com/embed/";
  codificar = true;
}
