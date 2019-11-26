import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcurrenttrainingsComponent } from './ucurrenttrainings.component';

describe('UcurrenttrainingsComponent', () => {
  let component: UcurrenttrainingsComponent;
  let fixture: ComponentFixture<UcurrenttrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcurrenttrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcurrenttrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
