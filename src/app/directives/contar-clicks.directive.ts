import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: 'a[contar-clicks]'
})

export class ContarClicksDirective{
  clickN = 0;
  @HostListener('click', ['$event.target']) onclick(btn){
    console.log('a', btn, 'Número de cliks: ', this.clickN++)
  }
}