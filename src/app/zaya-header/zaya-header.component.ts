import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-header',
  templateUrl: './zaya-header.component.html',
  styleUrls: ['./zaya-header.component.css']
})
export class ZayaHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onMenuClick() {
    if(window.innerWidth < 767)
      $('.navbar-collapse').collapse('toggle');
  }

}
