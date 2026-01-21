import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chateaux } from './chateaux';

describe('Chateaux', () => {
  let component: Chateaux;
  let fixture: ComponentFixture<Chateaux>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chateaux]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chateaux);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
