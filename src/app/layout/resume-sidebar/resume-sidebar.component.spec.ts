import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSidebarComponent } from './resume-sidebar.component';

describe('ResumeSidebarComponent', () => {
  let component: ResumeSidebarComponent;
  let fixture: ComponentFixture<ResumeSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
