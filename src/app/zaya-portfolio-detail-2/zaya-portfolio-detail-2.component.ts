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
export class ZayaPortfolioDetail2Component implements OnInit {

  private arrayOfPathsLargeImages: Array<string> = null;
  private arrayOfPathsThumbnailsImages: Array<string> = null;
  private nextLink = 0;
  private prevLink = 0;
  private _detailPortfolio: PortfolioDetailModel = null;

  constructor(private portFolioService: ZayaPortfolioDetailService, private route: ActivatedRoute,
              private zayaMapper : ZayaMapperService<PortfolioDetailModel>) {
    this._detailPortfolio = new PortfolioDetailModel();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let param = +params.get('id');
      this.prevLink = param == 1 ? param : (param - 1);
      this._detailPortfolio = this.zayaMapper.MapToObject(this.portFolioService.getDataForModel(param), PortfolioDetailModel);
      this.nextLink = param == this.portFolioService.getCountOfImages() ? param : (param + 1);
      this.arrayOfPathsLargeImages = this.portFolioService.getPathForLargeImages(param);
      this.arrayOfPathsThumbnailsImages = this.portFolioService.getPathForThumbnails(param);
    });
  }
}
