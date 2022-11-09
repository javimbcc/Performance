import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarnuevotemaComponent } from './editarnuevotema.component';

describe('EditarnuevotemaComponent', () => {
  let component: EditarnuevotemaComponent;
  let fixture: ComponentFixture<EditarnuevotemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarnuevotemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarnuevotemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
