import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamadInfoComponent } from './namad-info.component';

describe('NamadInfoComponent', () => {
  let component: NamadInfoComponent;
  let fixture: ComponentFixture<NamadInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamadInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
