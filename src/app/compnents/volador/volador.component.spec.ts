import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoladorComponent } from './volador.component';

describe('VoladorComponent', () => {
  let component: VoladorComponent;
  let fixture: ComponentFixture<VoladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoladorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
