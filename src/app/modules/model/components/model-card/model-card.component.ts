import { Model } from 'src/app/modules/shared/models/model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.scss']
})
export class ModelCardComponent {
  @Input() model!: Model;
}
