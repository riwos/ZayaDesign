import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'angular2-lightbox';
@Component({
  selector: 'zaya-portfolio-detail',
  templateUrl: './zaya-portfolio-detail.component.html',
  styleUrls: ['./zaya-portfolio-detail.component.css']
})
export class ZayaPortfolioDetailComponent implements OnInit {

  private _album = [];
  
  constructor(private _lightbox: Lightbox) {
    // for (let i = 1; i <= 4; i++) {
    //   const src = 'demo/img/image' + i + '.jpg';
    //   const caption = 'Image ' + i + ' caption here';
    //   const thumb = 'demo/img/image' + i + '-thumb.jpg';
    //   const album = {
    //      src: src,
    //      caption: caption,
    //      thumb: thumb
    //   };

      let album = {
        src: 'assets/test/a.jpg',
        caption: 'Image a',
        thumb: ''
      }

      let album1 = {
        src: 'assets/test/b.jpg',
        caption: 'Image b',
        thumb: ''
      }

      let album2 = {
        src: 'assets/test/c.jpg',
        caption: 'Image c',
        thumb: ''
      }

      let album3 = {
        src: 'assets/test/d.jpg',
        caption: 'Image d',
        thumb: ''
      }

      this._album.push(album);
      this._album.push(album1);
      this._album.push(album2);
      this._album.push(album3);

  }

  ngOnInit() {

  }

  openLightbox(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  
}
