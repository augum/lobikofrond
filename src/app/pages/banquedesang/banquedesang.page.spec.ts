import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanquedesangPage } from './banquedesang.page';

describe('BanquedesangPage', () => {
  let component: BanquedesangPage;
  let fixture: ComponentFixture<BanquedesangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanquedesangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanquedesangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
