import { Model } from './../../../shared/models/model';
import { SketchfabService } from './../../../shared/services/sketchfab.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  models!: Model[];
  public searchTerm: string = '';

  constructor(private readonly SketchfabService: SketchfabService) {
    this.SketchfabService.getLatestModels().subscribe((models: Model[]) => {
      this.models = models;
    });
   }

  public onFormSubmit(event: Event) {
    event.preventDefault();
    //console.log('Valor del campo de búsqueda:', this.searchTerm);
    this.SketchfabService.getModelsByQuery(this.searchTerm).subscribe((models: Model[]) => {
      this.models = models;
    });
   }
}
