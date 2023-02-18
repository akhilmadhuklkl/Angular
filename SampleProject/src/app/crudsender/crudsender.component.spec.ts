import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudsenderComponent } from './crudsender.component';

describe('CrudsenderComponent', () => {
  let component: CrudsenderComponent;
  let fixture: ComponentFixture<CrudsenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudsenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudsenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
