import { Injectable } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Injectable({
  providedIn: 'root'
})
export class CarouselOptsService {

  constructor() { }


  customOptions: OwlOptions = {
    loop: false,
    autoplay: true,
    autoplaySpeed: 600,
    autoplayMouseleaveTimeout: 3,
    animateIn: true,
    animateOut: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [`<button class="btn btn-outline-success">Prev</button>`, 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      },
    },
    nav: true
  }

}
