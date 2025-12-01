import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprenderTsComponent } from './aprender-ts.component';

describe('AprenderTsComponent', () => {
  let component: AprenderTsComponent;
  let fixture: ComponentFixture<AprenderTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprenderTsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprenderTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
