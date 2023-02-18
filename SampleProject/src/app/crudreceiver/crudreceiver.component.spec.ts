import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudreceiverComponent } from './crudreceiver.component';

describe('CrudreceiverComponent', () => {
  let component: CrudreceiverComponent;
  let fixture: ComponentFixture<CrudreceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudreceiverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudreceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
