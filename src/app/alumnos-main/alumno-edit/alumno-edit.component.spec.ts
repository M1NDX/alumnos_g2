import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoEditComponent } from './alumno-edit.component';

describe('AlumnoEditComponent', () => {
  let component: AlumnoEditComponent;
  let fixture: ComponentFixture<AlumnoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
