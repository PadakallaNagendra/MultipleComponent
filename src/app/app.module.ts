import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaComponent } from './Component/india/india.component';
import { USAComponent } from './Component/usa/usa.component';
import { IndiaModule } from './Modules/india/india.module';
import { USAModule } from './Modules/usa/usa.module';


@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    USAComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndiaModule,
    USAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
