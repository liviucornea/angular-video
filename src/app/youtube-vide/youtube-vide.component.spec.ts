import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeVideComponent } from './youtube-vide.component';

describe('YoutubeVideComponent', () => {
  let component: YoutubeVideComponent;
  let fixture: ComponentFixture<YoutubeVideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeVideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeVideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
