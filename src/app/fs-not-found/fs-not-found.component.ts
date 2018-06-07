import { BaseComponent } from './../.common/zaya-base-component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fs-not-found',
  templateUrl: './fs-not-found.component.html',
  styleUrls: ['./fs-not-found.component.css']
})
export class FSNotFoundComponent extends BaseComponent implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
