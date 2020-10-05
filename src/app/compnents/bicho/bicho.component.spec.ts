import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BichoComponent } from './bicho.component';

describe('BichoComponent', () => {
  let component: BichoComponent;
  let fixture: ComponentFixture<BichoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BichoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BichoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
