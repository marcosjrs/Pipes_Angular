import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: any, capitalizarTodasLasPalabras: boolean): any {
    value = value.toLowerCase();
    if(capitalizarTodasLasPalabras){
      value =value.split(" ");
      for (let i = 0; i < value.length; i++) {
        value [i] =value[i][0].toUpperCase() + value[i].substr(1);
      }
      return value.join(" ");
    }else{
       return value[0].toUpperCase() + value.substr(1);
    }
  }

}
