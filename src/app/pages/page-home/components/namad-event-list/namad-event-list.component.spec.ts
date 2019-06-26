import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamadEventListComponent } from './namad-event-list.component';

describe('NamadEventListComponent', () => {
  let component: NamadEventListComponent;
  let fixture: ComponentFixture<NamadEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamadEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamadEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
