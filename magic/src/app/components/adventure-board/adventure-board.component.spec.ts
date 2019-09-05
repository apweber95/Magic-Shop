import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureBoardComponent } from './adventure-board.component';

describe('AdventureBoardComponent', () => {
  let component: AdventureBoardComponent;
  let fixture: ComponentFixture<AdventureBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
