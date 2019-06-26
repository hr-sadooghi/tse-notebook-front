import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetBuyComponent } from './set-buy.component';

describe('SetBuyComponent', () => {
  let component: SetBuyComponent;
  let fixture: ComponentFixture<SetBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
