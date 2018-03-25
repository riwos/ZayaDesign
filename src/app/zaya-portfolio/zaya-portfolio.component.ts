import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-zaya-portfolio',
  templateUrl: './zaya-portfolio.component.html',
  styleUrls: ['./zaya-portfolio.component.css']
})
export class ZayaPortfolioComponent implements OnInit, AfterViewInit {

  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
  }

}
