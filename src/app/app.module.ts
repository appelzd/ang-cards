import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScannerComponent } from './scanner/scanner.component';
import { ViewerComponent } from './viewer/viewer.component';
import AwsService from './services/aws.service';

@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AwsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
