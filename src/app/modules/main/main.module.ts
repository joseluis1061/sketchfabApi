import { BannerComponent } from './../shared/components/banner/banner.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './components/index/index.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    IndexComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CarouselModule,
    RouterModule,
    BannerComponent
  ]
})
export class MainModule { }
