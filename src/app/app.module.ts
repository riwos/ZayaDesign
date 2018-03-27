import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ZayaHeaderComponent } from './zaya-header/zaya-header.component';
import { ZayaSliderComponent } from './zaya-slider/zaya-slider.component';
import { ZayaPortfolioComponent } from './zaya-portfolio/zaya-portfolio.component';
import { ZayaNotFoundComponent } from './zaya-not-found/zaya-not-found.component';
import { ZayaMainPageComponent } from './zaya-main-page/zaya-main-page.component';
import { ZayaContactComponent } from './zaya-contact/zaya-contact.component';
import { ZayaScopeComponent } from './zaya-scope/zaya-scope.component';
import { ScrollToModule } from 'ng2-scroll-to';
import { ZayaAboutComponent } from './zaya-about/zaya-about.component';
import { ZayaPortfolioDetailService } from './services/zaya-portfolio-detail.service';
import { ZayaPortfolioDetail2Component } from './zaya-portfolio-detail-2/zaya-portfolio-detail-2.component';
//import { LightboxModule } from 'angular2-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ZayaHeaderComponent,
    ZayaSliderComponent,
    ZayaMainPageComponent,
    ZayaPortfolioComponent,
    ZayaNotFoundComponent,
    ZayaContactComponent,
    ZayaScopeComponent,
    ZayaAboutComponent,
    ZayaPortfolioDetail2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: ZayaMainPageComponent },
      { path: 'portfolio/:id', component: ZayaPortfolioDetail2Component},
      { path: 'portfolio', component: ZayaPortfolioComponent},
      { path: 'contact', component: ZayaContactComponent},
      { path: '**', component: ZayaNotFoundComponent }
      ]),
      ScrollToModule.forRoot()
  ],
  providers: [ZayaPortfolioDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
