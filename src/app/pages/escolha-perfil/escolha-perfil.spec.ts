import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaPerfil } from './escolha-perfil';

describe('EscolhaPerfil', () => {
  let component: EscolhaPerfil;
  let fixture: ComponentFixture<EscolhaPerfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolhaPerfil],
    }).compileComponents();

    fixture = TestBed.createComponent(EscolhaPerfil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
