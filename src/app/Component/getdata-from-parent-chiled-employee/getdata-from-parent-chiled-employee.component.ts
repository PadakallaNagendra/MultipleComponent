import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-getdata-from-parent-chiled-employee',
  templateUrl: './getdata-from-parent-chiled-employee.component.html',
  styleUrls: ['./getdata-from-parent-chiled-employee.component.css']
})
export class GetdataFromParentChiledEmployeeComponent {
@Input() 
x: string="";
}
