import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiquicoComponent } from './psiquico.component';

describe('PsiquicoComponent', () => {
  let component: PsiquicoComponent;
  let fixture: ComponentFixture<PsiquicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsiquicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsiquicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
