import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaComponent } from './Component/india/india.component';
import { USAComponent } from './Component/usa/usa.component';
import { IndiaModule } from './Modules/india/india.module';
import { USAModule } from './Modules/usa/usa.module';
import { SharingDataParentChiledCompanyComponent } from './Component/sharing-data-parent-chiled-company/sharing-data-parent-chiled-company.component';
import { GetdataFromParentChiledEmployeeComponent } from './Component/getdata-from-parent-chiled-employee/getdata-from-parent-chiled-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    USAComponent,
    SharingDataParentChiledCompanyComponent,
    GetdataFromParentChiledEmployeeComponent,
   
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
