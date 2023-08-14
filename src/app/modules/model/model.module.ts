import { BannerComponent } from './../shared/components/banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelRoutingModule } from './model-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { ModelCardComponent } from './components/model-card/model-card.component';

@NgModule({
  declarations: [
    DetailComponent,
    ModelCardComponent
  ],
  imports: [
    CommonModule,
    ModelRoutingModule,
    BannerComponent
  ],
  exports: [
    ModelCardComponent
  ]
})
export class ModelModule { }
