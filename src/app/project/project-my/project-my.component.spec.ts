import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMyComponent } from './project-my.component';

describe('ProjectMyComponent', () => {
  let component: ProjectMyComponent;
  let fixture: ComponentFixture<ProjectMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
