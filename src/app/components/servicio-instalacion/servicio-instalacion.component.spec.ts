import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioInstalacionComponent } from './servicio-instalacion.component';

describe('ServicioInstalacionComponent', () => {
  let component: ServicioInstalacionComponent;
  let fixture: ComponentFixture<ServicioInstalacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioInstalacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioInstalacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
