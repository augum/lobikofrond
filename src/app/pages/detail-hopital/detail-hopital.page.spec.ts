import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHopitalPage } from './detail-hopital.page';

describe('DetailHopitalPage', () => {
  let component: DetailHopitalPage;
  let fixture: ComponentFixture<DetailHopitalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailHopitalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHopitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
