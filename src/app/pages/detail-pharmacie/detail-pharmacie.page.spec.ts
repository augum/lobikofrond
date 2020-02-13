import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPharmaciePage } from './detail-pharmacie.page';

describe('DetailPharmaciePage', () => {
  let component: DetailPharmaciePage;
  let fixture: ComponentFixture<DetailPharmaciePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPharmaciePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPharmaciePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
