import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLatayComponent } from './app-latay.component';

describe('AppLatayComponent', () => {
  let component: AppLatayComponent;
  let fixture: ComponentFixture<AppLatayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLatayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLatayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
