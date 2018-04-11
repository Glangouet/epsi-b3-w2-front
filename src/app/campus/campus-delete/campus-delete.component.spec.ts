import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusDeleteComponent } from './campus-delete.component';

describe('CampusDeleteComponent', () => {
  let component: CampusDeleteComponent;
  let fixture: ComponentFixture<CampusDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should delete', () => {
    expect(component).toBeTruthy();
  });
});
