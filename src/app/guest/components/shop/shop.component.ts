import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor() { }
    public men = [
      { src: 'assets/images/menshirt.png', price: '500' },
      { src: 'assets/images/mensuit.png', price: '500' },
      { src: 'assets/images/mencloth.png', price: '500' },
      { src: 'assets/images/menshirt.png', price: '500' },
      { src: 'assets/images/mensuit.png', price: '500' },
      { src: 'assets/images/mencloth.png', price: '500' },
    ]
   women = [
      { src: 'assets/images/womencroptop.png', price: '500' },
      { src: 'assets/images/womengown.png', price: '500' },
      { src: 'assets/images/womengown.png', price: '500' },
      { src: 'assets/images/womenroundneck.png', price: '500' },
      { src: 'assets/images/womensweater.png', price: '500' },
      { src: 'assets/images/womenroundneck.png', price: '500' },
    ]
   children = [
    { src: 'assets/images/boyshirt.png', price: '500' },
    { src: 'assets/images/child_uniquedress.png', price: '500' },
    { src: 'assets/images/chilren.webp', price: '500' },
    { src: 'assets/images/child_uniquedress.png', price: '500' },
    { src: 'assets/images/download.webp', price: '500' },
    { src: 'assets/images/download.webp', price: '500' },
   ]

  ngOnInit(): void {
  }

}
