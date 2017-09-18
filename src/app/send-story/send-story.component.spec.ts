import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendStoryComponent } from './send-story.component';

describe('SendStoryComponent', () => {
  let component: SendStoryComponent;
  let fixture: ComponentFixture<SendStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
