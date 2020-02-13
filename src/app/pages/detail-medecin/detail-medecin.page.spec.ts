import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMedecinPage } from './detail-medecin.page';

describe('DetailMedecinPage', () => {
  let component: DetailMedecinPage;
  let fixture: ComponentFixture<DetailMedecinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMedecinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
