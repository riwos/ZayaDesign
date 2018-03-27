import { Component, OnInit } from '@angular/core';
import { ZayaPortfolioDetailService } from '../services/zaya-portfolio-detail.service';

@Component({
  selector: 'app-zaya-portfolio-detail-2',
  templateUrl: './zaya-portfolio-detail-2.component.html',
  styleUrls: ['./zaya-portfolio-detail-2.component.css']
})
export class ZayaPortfolioDetail2Component implements OnInit {

  constructor(private portFolioService : ZayaPortfolioDetailService) { }

  ngOnInit() {
  }

}
