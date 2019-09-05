import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerceptionComponent } from './perception.component';

describe('PerceptionComponent', () => {
  let component: PerceptionComponent;
  let fixture: ComponentFixture<PerceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
