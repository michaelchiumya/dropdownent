import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosBackComponent } from './videos-back.component';

describe('VideosBackComponent', () => {
  let component: VideosBackComponent;
  let fixture: ComponentFixture<VideosBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
