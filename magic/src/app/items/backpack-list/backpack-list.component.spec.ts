import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackpackListComponent } from './backpack-list.component';

describe('BackpackListComponent', () => {
  let component: BackpackListComponent;
  let fixture: ComponentFixture<BackpackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackpackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackpackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
