import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppKoylaComponent } from './app-koyla.component';

describe('AppKoylaComponent', () => {
  let component: AppKoylaComponent;
  let fixture: ComponentFixture<AppKoylaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppKoylaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppKoylaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
