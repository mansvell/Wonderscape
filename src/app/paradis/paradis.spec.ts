import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paradis } from './paradis';

describe('Paradis', () => {
  let component: Paradis;
  let fixture: ComponentFixture<Paradis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paradis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paradis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
