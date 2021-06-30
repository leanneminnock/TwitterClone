import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTweetComponent } from './full-tweet.component';

describe('FullTweetComponent', () => {
  let component: FullTweetComponent;
  let fixture: ComponentFixture<FullTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
