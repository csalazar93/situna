import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAsignacionesComponent } from './home-asignaciones.component';

describe('HomeAsignacionesComponent', () => {
  let component: HomeAsignacionesComponent;
  let fixture: ComponentFixture<HomeAsignacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAsignacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAsignacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
