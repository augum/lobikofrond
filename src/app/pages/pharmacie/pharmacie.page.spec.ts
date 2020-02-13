import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciePage } from './pharmacie.page';

describe('PharmaciePage', () => {
  let component: PharmaciePage;
  let fixture: ComponentFixture<PharmaciePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaciePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaciePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
