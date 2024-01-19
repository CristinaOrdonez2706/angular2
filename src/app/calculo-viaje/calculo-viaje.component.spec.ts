import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoViajeComponent } from './calculo-viaje.component';

describe('CalculoViajeComponent', () => {
  let component: CalculoViajeComponent;
  let fixture: ComponentFixture<CalculoViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculoViajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculoViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
