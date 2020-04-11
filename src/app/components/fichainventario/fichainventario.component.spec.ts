import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichainventarioComponent } from './fichainventario.component';

describe('FichainventarioComponent', () => {
  let component: FichainventarioComponent;
  let fixture: ComponentFixture<FichainventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichainventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichainventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
