import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusproductComponent } from './contactusproduct.component';

describe('ContactusproductComponent', () => {
  let component: ContactusproductComponent;
  let fixture: ComponentFixture<ContactusproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactusproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
