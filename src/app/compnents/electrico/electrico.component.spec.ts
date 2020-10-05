import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricoComponent } from './electrico.component';

describe('ElectricoComponent', () => {
  let component: ElectricoComponent;
  let fixture: ComponentFixture<ElectricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
