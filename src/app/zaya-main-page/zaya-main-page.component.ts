import { BaseComponent } from './../.common/zaya-base-component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zaya-main-page',
  templateUrl: './zaya-main-page.component.html',
  styleUrls: ['./zaya-main-page.component.css']
})
export class ZayaMainPageComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
