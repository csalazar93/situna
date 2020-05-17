import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSolicitudesComponent } from './home-solicitudes.component';

describe('HomeSolicitudesComponent', () => {
  let component: HomeSolicitudesComponent;
  let fixture: ComponentFixture<HomeSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
