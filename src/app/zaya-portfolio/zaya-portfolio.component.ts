import { BaseComponent } from './../.common/zaya-base-component';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ZayaPortfolioDetailService } from '../services/zaya-portfolio-detail.service';
import { PortfolioDetailModel } from '../.model/zaya-portfolio-detail-model';

@Component({
  selector: 'app-zaya-portfolio',
  templateUrl: './zaya-portfolio.component.html',
  styleUrls: ['./zaya-portfolio.component.css']
})
export class ZayaPortfolioComponent extends BaseComponent implements OnInit {

  numberOfImages: Array<number> = null;
  _detailPortfolio: PortfolioDetailModel = null;

  constructor(private portFolioService: ZayaPortfolioDetailService) {
    super();
    this.numberOfImages = Array.from(Array(portFolioService.getCountOfImages()), (x, i) => i);
  }

  ngOnInit() {

  }

}
