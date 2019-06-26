import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSellComponent } from './set-sell.component';

describe('SetSellComponent', () => {
  let component: SetSellComponent;
  let fixture: ComponentFixture<SetSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
