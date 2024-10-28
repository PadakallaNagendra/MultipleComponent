import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDelhiComponent } from 'src/app/Component/new-delhi/new-delhi.component';
import { HydrabadComponent } from 'src/app/Component/hydrabad/hydrabad.component';



@NgModule({
  declarations: [NewDelhiComponent,HydrabadComponent],
  exports:[NewDelhiComponent,HydrabadComponent],
  imports: [
    CommonModule
  ]
})
export class IndiaModule { }
