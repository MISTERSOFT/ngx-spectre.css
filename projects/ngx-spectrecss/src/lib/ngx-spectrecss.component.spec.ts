import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSpectrecssComponent } from './ngx-spectrecss.component';

describe('NgxSpectrecssComponent', () => {
  let component: NgxSpectrecssComponent;
  let fixture: ComponentFixture<NgxSpectrecssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSpectrecssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSpectrecssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
