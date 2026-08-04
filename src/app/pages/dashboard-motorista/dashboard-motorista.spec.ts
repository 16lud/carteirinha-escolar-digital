import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMotorista } from './dashboard-motorista';

describe('DashboardMotorista', () => {
  let component: DashboardMotorista;
  let fixture: ComponentFixture<DashboardMotorista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMotorista],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardMotorista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
