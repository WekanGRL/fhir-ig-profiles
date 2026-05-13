import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedLocation } from './selected-location';

describe('SelectedLocation', () => {
  let component: SelectedLocation;
  let fixture: ComponentFixture<SelectedLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedLocation],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedLocation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
