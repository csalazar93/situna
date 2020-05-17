import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAtractivoComponent } from './home-atractivo.component';

describe('HomeAtractivoComponent', () => {
  let component: HomeAtractivoComponent;
  let fixture: ComponentFixture<HomeAtractivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAtractivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAtractivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
