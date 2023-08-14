import { SketchfabService } from './../../../shared/services/sketchfab.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/modules/shared/models/model';
declare var Sketchfab: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  public model!: Model;
  public uid: string | null = null;
  public viewer: any;
  @ViewChild('viewerContainer', { static: true }) viewerContainer!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private readonly SketchfabService: SketchfabService
  ) {}

  public initViewer() {
    this.viewer = new Sketchfab(this.viewerContainer?.nativeElement);

    this.viewer.init(this.uid, {
      success: this.success,
      error: () => console.error('Sketchfab API error'),
      ui_stop: 0,
      preload: 1,
      camera: 0,
    });
  }

  public ngOnInit(): void {
    this.uid = this.route.snapshot.paramMap.get('uid');
    if (this.uid) {
      this.SketchfabService.getModel(this.uid).subscribe((model) => {
        this.model = model;
      });
    }
    this.initViewer();
  }

  private success(api: any) {
    console.log('Viewer successfully created');
  }
}
