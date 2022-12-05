import { Component, OnInit } from '@angular/core';
import { CarouselOptsService } from 'src/app/data/guest/services/carousel-opts.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private carOpt: CarouselOptsService) { }
    public men = [
      { src: 'assets/images/menshirt.png', price: '500' },
      { src: 'assets/images/menshirt.png', price: '500' },
      { src: 'assets/images/menshirt.png', price: '500' },
      { src: 'assets/images/menshirt.png', price: '500' },
      { src: 'assets/images/menshirt.png', price: '500' },
      { src: 'assets/images/menshirt.png', price: '500' },
      { src: 'assets/images/menshirt.png', price: '500' },
      { src: 'assets/images/menshirt.png', price: '500' },
      { src: 'assets/images/menshirt.png', price: '500' },
      { src: 'assets/images/menshirt.png', price: '500' },
      { src: 'assets/images/menshirt.png', price: '500' },
      { src: 'assets/images/menshirt.png', price: '500' },
      { src: 'assets/images/menshirt.png', price: '500' },
      { src: 'assets/images/menshirt.png', price: '500' },
    ]
   women = [
      { src: 'assets/images/womencroptop.png', price: '500' },
      { src: 'assets/images/womencroptop.png', price: '500' },
      { src: 'assets/images/womencroptop.png', price: '500' },
      { src: 'assets/images/womencroptop.png', price: '500' },
      { src: 'assets/images/womencroptop.png', price: '500' },
      { src: 'assets/images/womencroptop.png', price: '500' },
      { src: 'assets/images/womencroptop.png', price: '500' },
      { src: 'assets/images/womencroptop.png', price: '500' },
      { src: 'assets/images/womencroptop.png', price: '500' },
      { src: 'assets/images/womencroptop.png', price: '500' },
      { src: 'assets/images/womencroptop.png', price: '500' },
      { src: 'assets/images/womencroptop.png', price: '500' },
      { src: 'assets/images/womencroptop.png', price: '500' },
      { src: 'assets/images/womencroptop.png', price: '500' },
      { src: 'assets/images/womencroptop.png', price: '500' },
    ]
   children = [
    { src: 'assets/images/boyshirt.png', price: '500' },
    { src: 'assets/images/boyshirt.png', price: '500' },
    { src: 'assets/images/boyshirt.png', price: '500' },
    { src: 'assets/images/boyshirt.png', price: '500' },
    { src: 'assets/images/boyshirt.png', price: '500' },
    { src: 'assets/images/boyshirt.png', price: '500' },
    { src: 'assets/images/boyshirt.png', price: '500' },
    { src: 'assets/images/boyshirt.png', price: '500' },
    { src: 'assets/images/boyshirt.png', price: '500' },
    { src: 'assets/images/boyshirt.png', price: '500' },
    { src: 'assets/images/boyshirt.png', price: '500' },
    { src: 'assets/images/boyshirt.png', price: '500' },
    { src: 'assets/images/boyshirt.png', price: '500' },
    { src: 'assets/images/boyshirt.png', price: '500' },
   ]
   customOptions = this.carOpt.customOptions;

  ngOnInit(): void {
  }

}
