import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { ZayaPortfolioDetailService } from '../services/zaya-portfolio-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zaya-portfolio-detail-2',
  templateUrl: './zaya-portfolio-detail-2.component.html',
  styleUrls: ['./zaya-portfolio-detail-2.component.css']
})
export class ZayaPortfolioDetail2Component implements OnInit {

  private arrayOfPathsLargeImages: Array<string> = null;
  private arrayOfPathsThumbnailsImages: Array<string> = null;
  private nextLink;
  private prevLink

  constructor(private portFolioService: ZayaPortfolioDetailService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let param = +params.get('id');
      this.prevLink = param == 1 ? param  : (param-1);
      this.nextLink = param == this.portFolioService.getCountOfImages() ? -1 : (param+1);
      this.arrayOfPathsLargeImages = this.portFolioService.getPathForLargeImages(param);
      this.arrayOfPathsThumbnailsImages = this.portFolioService.getPathForThumbnails(param);
      console.log(params);
    });
  }
}
