import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserAttributeComponent } from './add-user-attribute.component';

describe('AddUserAttributeComponent', () => {
  let component: AddUserAttributeComponent;
  let fixture: ComponentFixture<AddUserAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
