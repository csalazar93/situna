import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFichasComponent } from './home-fichas.component';

describe('HomeFichasComponent', () => {
  let component: HomeFichasComponent;
  let fixture: ComponentFixture<HomeFichasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFichasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFichasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
