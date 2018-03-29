import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { ZayaPortfolioDetailService } from '../services/zaya-portfolio-detail.service';

@Component({
  selector: 'app-zaya-portfolio-detail-2',
  templateUrl: './zaya-portfolio-detail-2.component.html',
  styleUrls: ['./zaya-portfolio-detail-2.component.css']
})
export class ZayaPortfolioDetail2Component implements OnInit {

  private arrayOfPathsLargeImages: Array<string> = null;
  private arrayOfPathsThumbnailsImages: Array<string> = null;

  constructor(private portFolioService: ZayaPortfolioDetailService) { }

  ngOnInit() {
    this.arrayOfPathsLargeImages = this.portFolioService.getPathForLargeImages("1");
    this.arrayOfPathsThumbnailsImages = this.portFolioService.getPathForThumbnails("1");
  }
}
