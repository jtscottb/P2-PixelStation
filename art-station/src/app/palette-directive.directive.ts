import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPaletteDirective]',
})
export class PaletteDirectiveDirective {
  constructor(private element: ElementRef) {}

  @HostListener('click')
  imageChange() {
    var src: any = this.element.nativeElement.src;

    var fullScreenImage: any = document.getElementById('fullscreen-image');

    fullScreenImage.src = src;
    var slide = document.getElementsByClassName('image-slide');
    for (let i = 0; i < slide.length; i++) {
      slide[i].classList.remove('active');
    }

    this.element.nativeElement.parentElement.classList.add('active');

    console.log(fullScreenImage);
  }
}
