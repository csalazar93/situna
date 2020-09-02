import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRolesComponent } from './home-roles.component';

describe('HomeRolesComponent', () => {
  let component: HomeRolesComponent;
  let fixture: ComponentFixture<HomeRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
