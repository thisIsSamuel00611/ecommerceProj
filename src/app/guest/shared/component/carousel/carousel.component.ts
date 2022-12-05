import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppComponent } from 'src/app/app.component';
import { CarouselOptsService } from 'src/app/data/guest/services/carousel-opts.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {


  constructor(
    private carOpt: CarouselOptsService
  ) { }

  ngOnInit(): void {
  }

  customOptions = this.carOpt.customOptions;
}
