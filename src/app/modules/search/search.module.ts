import { ModelModule } from './../model/model.module';
import { BannerComponent } from './../shared/components/banner/banner.component';
import { SearchRoutingModule } from './search-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    BannerComponent,
    ModelModule,
    FormsModule
  ]
})
export class SearchModule { }
