import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosMainComponent } from './alumnos-main.component';

describe('AlumnosMainComponent', () => {
  let component: AlumnosMainComponent;
  let fixture: ComponentFixture<AlumnosMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
