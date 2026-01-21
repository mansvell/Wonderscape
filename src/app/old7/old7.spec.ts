import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Old7 } from './old7';

describe('Old7', () => {
  let component: Old7;
  let fixture: ComponentFixture<Old7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Old7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Old7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
