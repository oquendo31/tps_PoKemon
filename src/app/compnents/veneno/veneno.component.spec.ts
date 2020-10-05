import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenenoComponent } from './veneno.component';

describe('VenenoComponent', () => {
  let component: VenenoComponent;
  let fixture: ComponentFixture<VenenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
