import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  host: {'(window:scroll)': 'track($event)'}
})
export class FooterComponent {
    currentYear: number = new Date().getFullYear();

  track($event) {
    console.log('test');
  }

  onEdit() {
   // window.scroll({ top: 0, left: 0, behavior: 'smooth' });
   // or
    document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
    // document.getElementById('arrowTop').removeAttribute('class');
    // document.getElementById('arrowTop').setAttribute('class', 'arrow-go-to-top fa fa-angle-up');
  }


}
