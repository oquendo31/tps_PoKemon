import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuchaComponent } from './lucha.component';

describe('LuchaComponent', () => {
  let component: LuchaComponent;
  let fixture: ComponentFixture<LuchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
