import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateInstallComponent } from './form-update-install.component';

describe('FormUpdateInstallComponent', () => {
  let component: FormUpdateInstallComponent;
  let fixture: ComponentFixture<FormUpdateInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpdateInstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdateInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
