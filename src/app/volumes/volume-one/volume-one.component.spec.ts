import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeOneComponent } from './volume-one.component';

describe('VolumeOneComponent', () => {
  let component: VolumeOneComponent;
  let fixture: ComponentFixture<VolumeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
