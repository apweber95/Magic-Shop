import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthComponent } from './stealth.component';

describe('StealthComponent', () => {
  let component: StealthComponent;
  let fixture: ComponentFixture<StealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
