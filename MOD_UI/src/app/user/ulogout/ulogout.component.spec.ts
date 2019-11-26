import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlogoutComponent } from './ulogout.component';

describe('UlogoutComponent', () => {
  let component: UlogoutComponent;
  let fixture: ComponentFixture<UlogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
