import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdataFromParentChiledEmployeeComponent } from './getdata-from-parent-chiled-employee.component';

describe('GetdataFromParentChiledEmployeeComponent', () => {
  let component: GetdataFromParentChiledEmployeeComponent;
  let fixture: ComponentFixture<GetdataFromParentChiledEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdataFromParentChiledEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetdataFromParentChiledEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
