import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAnalisisComponent } from './home-analisis.component';

describe('HomeAnalisisComponent', () => {
  let component: HomeAnalisisComponent;
  let fixture: ComponentFixture<HomeAnalisisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAnalisisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
