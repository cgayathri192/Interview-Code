import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalizeComponent } from './capitalize.component';

describe('CapitalizeComponent', () => {
  let component: CapitalizeComponent;
  let fixture: ComponentFixture<CapitalizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapitalizeComponent]
    });
    fixture = TestBed.createComponent(CapitalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
