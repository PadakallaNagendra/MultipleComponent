import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewyorkComponent } from 'src/app/Component/newyork/newyork.component';
import { WashingtonComponent } from 'src/app/Component/washington/washington.component';



@NgModule({
  declarations: [NewyorkComponent,WashingtonComponent],
  exports:[NewyorkComponent,WashingtonComponent],
  imports: [
    CommonModule
  ]
})
export class USAModule { }
