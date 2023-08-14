import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  imports: [RouterModule, CommonModule],
})
export class BannerComponent {
  @Input() showSearch!: boolean;
  @Input() title!: string;

  constructor() {
    //console.log("Search");
  }

}
