import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KasirComponent } from './kasir/kasir/kasir.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KasirComponent
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }