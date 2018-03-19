import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
declare let $: any;
declare let flexslider: any;

@Component({
  selector: 'app-zaya-slider',
  templateUrl: './zaya-slider.component.html',
  styleUrls: ['./zaya-slider.component.css']
})
export class ZayaSliderComponent implements OnInit, AfterViewInit {

  @ViewChild('zayaslider') ctrlSlider: ElementRef;

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    $(this.ctrlSlider.nativeElement).flexslider();
  }

}
