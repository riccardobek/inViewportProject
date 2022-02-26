import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxInViewportModule } from '@ngx-lite/in-viewport';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxInViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
