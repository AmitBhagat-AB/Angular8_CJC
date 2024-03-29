import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Module1Module } from './mod/module1/module1.module';
import { CommonserviceService } from './shared/commonservice.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,Module1Module
  ],
  providers: [CommonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
