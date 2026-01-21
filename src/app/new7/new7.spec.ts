import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New7 } from './new7';

describe('New7', () => {
  let component: New7;
  let fixture: ComponentFixture<New7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [New7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(New7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
