import { Model } from './../models/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SketchfabService {

  private apiKey = environment.apiKey;
  private baseUrl = 'https://api.sketchfab.com/v3/';

  constructor(private readonly http: HttpClient) {}

  public getLatestModels() {
    const url = `${this.baseUrl}models?sort_by=-publishedAt&archives_flavours=false`;

    return new Observable<Model[]>((observer) => {
      this.http.get(url).subscribe((response: any) => {
        const models = response.results.map((result: any) => {
          return new Model(result.name, result.uid, result.viewerUrl, result.thumbnails.images[0].url);
        });

        observer.next(models);
      });
    });
  }

  public getModel(uid: string): Observable<any> {
    const url = `${this.baseUrl}models/${uid}`;

    return new Observable<Model>((observer) => {
      this.http.get(url).subscribe((response: any) => {
        const model = new Model(response.name, response.uid, response.viewerUrl, response.thumbnails.images[0].url);
        observer.next(model);
      });
    });
  }

  public getModelsByQuery(query: string) {
    const url = `${this.baseUrl}search?q=${query}&archives_flavours=false`;

    return new Observable<Model[]>((observer) => {
      this.http.get(url).subscribe((response: any) => {
        const models = response.results.models.map((result: any) => {
          return new Model(result.name, result.uid, result.viewerUrl, result.thumbnails.images[0].url);
        });
        observer.next(models);
      });
    });
  }

  public getRandomModels(count: number = 3): Observable<any> {
    const url = `${this.baseUrl}models?sort_by=createdAt&archives_flavours=false`;

    return new Observable<Model[]>((observer) => {
      this.http.get(url).subscribe((response: any) => {
        const models = response.results.map((result: any) => {
          return new Model(result.name, result.uid, result.viewerUrl, result.thumbnails.images[0].url);
        });

        // const ret = models.sort(() => Math.random() - Math.random()).slice(0, count);
        const ret = models.sort(() => Math.random() - 0.5).slice(0, count);
        observer.next(ret);
      });
    });
  }
}
