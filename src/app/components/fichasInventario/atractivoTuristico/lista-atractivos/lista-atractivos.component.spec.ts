import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAtractivosComponent } from './lista-atractivos.component';

describe('ListaAtractivosComponent', () => {
  let component: ListaAtractivosComponent;
  let fixture: ComponentFixture<ListaAtractivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAtractivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAtractivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
