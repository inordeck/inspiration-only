import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorySoFarComponent } from './story-so-far.component';

describe('StorySoFarComponent', () => {
  let component: StorySoFarComponent;
  let fixture: ComponentFixture<StorySoFarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorySoFarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorySoFarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
