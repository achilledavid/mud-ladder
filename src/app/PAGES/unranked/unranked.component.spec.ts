import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrankedComponent } from './unranked.component';

describe('UnrankedComponent', () => {
  let component: UnrankedComponent;
  let fixture: ComponentFixture<UnrankedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnrankedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnrankedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
