import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTemaComponent } from './lista-tema.component';

describe('ListaTemaComponent', () => {
  let component: ListaTemaComponent;
  let fixture: ComponentFixture<ListaTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
