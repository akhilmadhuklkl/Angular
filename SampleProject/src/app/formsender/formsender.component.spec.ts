import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsenderComponent } from './formsender.component';

describe('FormsenderComponent', () => {
  let component: FormsenderComponent;
  let fixture: ComponentFixture<FormsenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
