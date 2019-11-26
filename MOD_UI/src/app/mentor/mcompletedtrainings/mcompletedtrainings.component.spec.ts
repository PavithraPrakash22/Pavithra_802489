import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McompletedtrainingsComponent } from './mcompletedtrainings.component';

describe('McompletedtrainingsComponent', () => {
  let component: McompletedtrainingsComponent;
  let fixture: ComponentFixture<McompletedtrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McompletedtrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McompletedtrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
