import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMotorista } from './login-motorista';

describe('LoginMotorista', () => {
  let component: LoginMotorista;
  let fixture: ComponentFixture<LoginMotorista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginMotorista],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginMotorista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
