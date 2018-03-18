import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ZayaHeaderComponent } from './zaya-header/zaya-header.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ZayaHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
