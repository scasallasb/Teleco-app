import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaEmpalmeComponent } from './caja-empalme.component';

describe('CajaEmpalmeComponent', () => {
  let component: CajaEmpalmeComponent;
  let fixture: ComponentFixture<CajaEmpalmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaEmpalmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaEmpalmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
