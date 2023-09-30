import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankedComponent } from './ranked.component';

describe('RankedComponent', () => {
  let component: RankedComponent;
  let fixture: ComponentFixture<RankedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
