import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor() { }
  prods = [
    { src: 'assets/images/photo-1603077747884-b458237de736.webp', price: '500' },
    { src: 'assets/images/photo-1603077747884-b458237de736.webp', price: '500' },
    { src: 'assets/images/photo-1603077747884-b458237de736.webp', price: '500' },
    { src: 'assets/images/photo-1603077747884-b458237de736.webp', price: '500' },
    { src: 'assets/images/photo-1603077747884-b458237de736.webp', price: '500' },
    { src: 'assets/images/photo-1603077747884-b458237de736.webp', price: '500' },
    { src: 'assets/images/photo-1603077747884-b458237de736.webp', price: '500' },
    { src: 'assets/images/photo-1603077747884-b458237de736.webp', price: '500' },
    { src: 'assets/images/photo-1603077747884-b458237de736.webp', price: '500' },
    { src: 'assets/images/photo-1603077747884-b458237de736.webp', price: '500' },
    { src: 'assets/images/photo-1603077747884-b458237de736.webp', price: '500' },
    { src: 'assets/images/photo-1603077747884-b458237de736.webp', price: '500' },
  ]

  ngOnInit(): void {
  }

}
