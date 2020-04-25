import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetoneproductComponent } from './getoneproduct.component';

describe('GetoneproductComponent', () => {
  let component: GetoneproductComponent;
  let fixture: ComponentFixture<GetoneproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetoneproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetoneproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
