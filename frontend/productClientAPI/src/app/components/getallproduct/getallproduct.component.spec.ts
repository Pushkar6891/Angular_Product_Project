import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallproductComponent } from './getallproduct.component';

describe('GetallproductComponent', () => {
  let component: GetallproductComponent;
  let fixture: ComponentFixture<GetallproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
