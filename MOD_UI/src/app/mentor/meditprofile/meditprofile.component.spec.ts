import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditprofileComponent } from './meditprofile.component';

describe('MeditprofileComponent', () => {
  let component: MeditprofileComponent;
  let fixture: ComponentFixture<MeditprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeditprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
