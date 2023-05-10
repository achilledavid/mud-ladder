import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsSinglesComponent } from './singles.component';

describe('SinglesComponent', () => {
  let component: RankingsSinglesComponent;
  let fixture: ComponentFixture<RankingsSinglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RankingsSinglesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RankingsSinglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
