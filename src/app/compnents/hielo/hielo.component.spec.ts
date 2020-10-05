import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HieloComponent } from './hielo.component';

describe('HieloComponent', () => {
  let component: HieloComponent;
  let fixture: ComponentFixture<HieloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HieloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HieloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
