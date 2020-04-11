import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistBackComponent } from './artist-back.component';

describe('ArtistBackComponent', () => {
  let component: ArtistBackComponent;
  let fixture: ComponentFixture<ArtistBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
