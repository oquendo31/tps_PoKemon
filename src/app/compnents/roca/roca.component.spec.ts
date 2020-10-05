import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocaComponent } from './roca.component';

describe('RocaComponent', () => {
  let component: RocaComponent;
  let fixture: ComponentFixture<RocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
