import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTemaDetallesComponent } from './lista-tema-detalles.component';

describe('ListaTemaDetallesComponent', () => {
  let component: ListaTemaDetallesComponent;
  let fixture: ComponentFixture<ListaTemaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTemaDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTemaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
