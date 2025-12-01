import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectoresYespecificidadComponent } from './selectores-yespecificidad.component';

describe('SelectoresYespecificidadComponent', () => {
  let component: SelectoresYespecificidadComponent;
  let fixture: ComponentFixture<SelectoresYespecificidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectoresYespecificidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectoresYespecificidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
