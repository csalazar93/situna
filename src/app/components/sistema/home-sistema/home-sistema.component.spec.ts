import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSistemaComponent } from './home-sistema.component';

describe('HomeSistemaComponent', () => {
  let component: HomeSistemaComponent;
  let fixture: ComponentFixture<HomeSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
