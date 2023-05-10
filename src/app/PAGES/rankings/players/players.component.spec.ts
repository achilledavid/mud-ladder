import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsPlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: RankingsPlayersComponent;
  let fixture: ComponentFixture<RankingsPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RankingsPlayersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RankingsPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
