import { BaseComponent } from './../.common/zaya-base-component';
import { PortfolioDetailModel } from './../.model/zaya-portfolio-detail-model';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { ZayaPortfolioDetailService } from '../services/zaya-portfolio-detail.service';
import { ActivatedRoute } from '@angular/router';
import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';
import { ZayaMapperService } from '../services/zaya-mapper.service';

@Component({
  selector: 'app-zaya-portfolio-detail-2',
  templateUrl: './zaya-portfolio-detail-2.component.html',
  styleUrls: ['./zaya-portfolio-detail-2.component.css']
})
export class ZayaPortfolioDetail2Component extends BaseComponent implements OnInit {

   arrayOfPathsLargeImages: Array<string> = null;
   arrayOfPathsThumbnailsImages: Array<string> = null;
   nextLink = 0;
   prevLink = 0;
   _detailPortfolio: PortfolioDetailModel = null;
   isShowArrows: boolean = false;

  constructor(private portFolioService: ZayaPortfolioDetailService, private route: ActivatedRoute,
              private zayaMapper : ZayaMapperService<PortfolioDetailModel>) {
                super();
    this._detailPortfolio = new PortfolioDetailModel();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let param = +params.get('id');
      this.prevLink = param == 1 ? param : (param - 1);
      this._detailPortfolio = this.zayaMapper.MapToObject(this.portFolioService.getDataForModel(param), PortfolioDetailModel);
      this.nextLink = param == this.portFolioService.getSumOfGalleries() ? param : (param + 1);
      this.arrayOfPathsLargeImages = this.portFolioService.getPathForLargeImages(param);
      this.arrayOfPathsThumbnailsImages = this.portFolioService.getPathForThumbnails(param);
      this.isShowArrows = this.portFolioService.getCountOfImagesInCurrentGallery() == 5;
      this.goToUpScroll();

    });
  }
}
