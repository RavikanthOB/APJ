import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpresidencyComponent } from './postpresidency.component';

describe('PostpresidencyComponent', () => {
  let component: PostpresidencyComponent;
  let fixture: ComponentFixture<PostpresidencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostpresidencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpresidencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
