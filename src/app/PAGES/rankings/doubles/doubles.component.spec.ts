import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsDoublesComponent } from './doubles.component';

describe('DoublesComponent', () => {
  let component: RankingsDoublesComponent;
  let fixture: ComponentFixture<RankingsDoublesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RankingsDoublesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RankingsDoublesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
