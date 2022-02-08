import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';

import { AppComponent } from './app.component';

//change lenguage app en-US-POSIX
import localEg from '@angular/common/locales/en-US-POSIX';
import localDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEg);
registerLocaleData(localDe);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    SalesModule
  ],
  providers: [
    //{provide: LOCALE_ID, useValue: 'en-US-POSIX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
