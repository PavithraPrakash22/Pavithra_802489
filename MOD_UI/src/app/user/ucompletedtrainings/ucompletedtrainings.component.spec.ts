import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcompletedtrainingsComponent } from './ucompletedtrainings.component';

describe('UcompletedtrainingsComponent', () => {
  let component: UcompletedtrainingsComponent;
  let fixture: ComponentFixture<UcompletedtrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcompletedtrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcompletedtrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
