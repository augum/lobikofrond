import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HopitalPage } from './hopital.page';

describe('HopitalPage', () => {
  let component: HopitalPage;
  let fixture: ComponentFixture<HopitalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HopitalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HopitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
