import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormreceiverComponent } from './formreceiver.component';

describe('FormreceiverComponent', () => {
  let component: FormreceiverComponent;
  let fixture: ComponentFixture<FormreceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormreceiverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormreceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
