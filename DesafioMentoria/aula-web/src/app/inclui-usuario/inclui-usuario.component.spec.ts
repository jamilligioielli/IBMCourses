import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluiUsuarioComponent } from './inclui-usuario.component';

describe('IncluiUsuarioComponent', () => {
  let component: IncluiUsuarioComponent;
  let fixture: ComponentFixture<IncluiUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluiUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluiUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
