import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFileComponent } from './set-file.component';

describe('SetFileComponent', () => {
  let component: SetFileComponent;
  let fixture: ComponentFixture<SetFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
