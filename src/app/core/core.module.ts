import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserModule,
  ],
  exports: [
    BrowserModule
  ]
})
export class CoreModule { }
