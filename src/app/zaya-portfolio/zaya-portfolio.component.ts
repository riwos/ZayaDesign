import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ZayaPortfolioDetailService } from '../services/zaya-portfolio-detail.service';

@Component({
  selector: 'app-zaya-portfolio',
  templateUrl: './zaya-portfolio.component.html',
  styleUrls: ['./zaya-portfolio.component.css']
})
export class ZayaPortfolioComponent implements OnInit, AfterViewInit {

   private numberOfImages : Array<number> = null;

  constructor(private portFolioService : ZayaPortfolioDetailService ) {
    this.numberOfImages = Array.from(Array(portFolioService.getCountOfImages()),(x,i)=>i)
   }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
  }

}
