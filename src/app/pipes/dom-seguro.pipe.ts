import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(value: string, codigo: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value+codigo);
  }

}
