import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHelpRequestComponent } from './create-help-request.component';

describe('CreateHelpRequestComponent', () => {
  let component: CreateHelpRequestComponent;
  let fixture: ComponentFixture<CreateHelpRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHelpRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHelpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
