import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLinkComponent } from './set-link.component';

describe('SetLinkComponent', () => {
  let component: SetLinkComponent;
  let fixture: ComponentFixture<SetLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
