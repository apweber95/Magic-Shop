import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthDialogComponent } from './stealth-dialog.component';

describe('StealthDialogComponent', () => {
  let component: StealthDialogComponent;
  let fixture: ComponentFixture<StealthDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StealthDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StealthDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
