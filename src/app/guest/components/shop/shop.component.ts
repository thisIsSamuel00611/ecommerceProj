import { Component, OnInit } from '@angular/core';
import { CarouselOptsService } from 'src/app/data/guest/services/carousel-opts.service';
import { DatabaseService } from 'src/app/data/guest/services/database.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private carOpt: CarouselOptsService, private dataB: DatabaseService) { }

    public men;
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
  this.dataB.men.subscribe(res => {
    this.men = res;
  })
  console.log(this.men)
}

}
