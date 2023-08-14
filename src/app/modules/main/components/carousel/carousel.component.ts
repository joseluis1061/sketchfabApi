import { Model } from './../../../shared/models/model';
import { SketchfabService } from './../../../shared/services/sketchfab.service';
import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [
    {
      provide: CarouselConfig,
      useValue: { interval: 2000, noPause: true, showIndicators: true },
    },
  ],
})
export class CarouselComponent {
  public images: Model[] = [];
  constructor(private readonly sketchfabService: SketchfabService) {
    this.sketchfabService.getRandomModels(10).subscribe((images) => { this.images = images; });
  }
}
