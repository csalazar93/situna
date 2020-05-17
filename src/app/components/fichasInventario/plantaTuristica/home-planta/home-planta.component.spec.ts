import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlantaComponent } from './home-planta.component';

describe('HomePlantaComponent', () => {
  let component: HomePlantaComponent;
  let fixture: ComponentFixture<HomePlantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePlantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
