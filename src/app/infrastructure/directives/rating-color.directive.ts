import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appRatingColor]'
})
export class RatingColorDirective implements AfterViewInit {
  constructor(
    private readonly el: ElementRef) {
  }

  ngAfterViewInit(): void {
    const rating = this.el.nativeElement.innerText as number;
    this.el.nativeElement.innerText = Math.abs(rating);
    this.el.nativeElement.style.fontWeight = 'bold';
    if (rating > 0) {
      this.el.nativeElement.innerText += '+';
      this.el.nativeElement.style.color = 'green';
    }
    if (rating < 0) {
      this.el.nativeElement.innerText += '-';
      this.el.nativeElement.style.color = 'red';
    }
  }
}
