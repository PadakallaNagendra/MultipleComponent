import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDataParentChiledCompanyComponent } from './sharing-data-parent-chiled-company.component';

describe('SharingDataParentChiledCompanyComponent', () => {
  let component: SharingDataParentChiledCompanyComponent;
  let fixture: ComponentFixture<SharingDataParentChiledCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharingDataParentChiledCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharingDataParentChiledCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
