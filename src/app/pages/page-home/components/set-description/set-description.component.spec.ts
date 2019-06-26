import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDescriptionComponent } from './set-description.component';

describe('SetDescriptionComponent', () => {
  let component: SetDescriptionComponent;
  let fixture: ComponentFixture<SetDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
