import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJuegosComponent } from './form-juegos.component';

describe('FormJuegosComponent', () => {
  let component: FormJuegosComponent;
  let fixture: ComponentFixture<FormJuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormJuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
