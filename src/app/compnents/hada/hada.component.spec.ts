import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadaComponent } from './hada.component';

describe('HadaComponent', () => {
  let component: HadaComponent;
  let fixture: ComponentFixture<HadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
