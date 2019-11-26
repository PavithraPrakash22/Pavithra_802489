import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlogoutComponent } from './mlogout.component';

describe('MlogoutComponent', () => {
  let component: MlogoutComponent;
  let fixture: ComponentFixture<MlogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
