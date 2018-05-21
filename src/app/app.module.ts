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
import { MomentModule } from 'angular2-moment';
import { ZayaMapperService } from './services/zaya-mapper.service';
import { FormsModule }   from '@angular/forms';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule  } from 'ng-recaptcha/forms';
import { ZayaHttpService } from './services/zaya-http.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import {GoTopButtonModule} from 'ng2-go-top-button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
      { path: 'about', component: ZayaAboutComponent},
      { path: '**', component: ZayaNotFoundComponent }
      ]),
      ScrollToModule.forRoot(),
      MomentModule,
      FormsModule,
      RecaptchaModule.forRoot(),   
      RecaptchaFormsModule,
      HttpClientModule,
      ToastNoAnimationModule,
      ToastrModule.forRoot({
        toastComponent: ToastNoAnimation,
      }),
      GoTopButtonModule,
      BrowserAnimationsModule
  ],
  providers: [
    ZayaPortfolioDetailService, 
    ZayaMapperService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { 
        siteKey: '6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S',
      } as RecaptchaSettings
    },
    ZayaHttpService,
    { provide: 'BASE_URL', useFactory: getBaseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return "http://localhost:5000/";
  //document.getElementsByTagName('base')[0].href;
}
