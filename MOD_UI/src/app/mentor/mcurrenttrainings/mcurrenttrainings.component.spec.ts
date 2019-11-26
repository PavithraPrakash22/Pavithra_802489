import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McurrenttrainingsComponent } from './mcurrenttrainings.component';

describe('McurrenttrainingsComponent', () => {
  let component: McurrenttrainingsComponent;
  let fixture: ComponentFixture<McurrenttrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McurrenttrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McurrenttrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
