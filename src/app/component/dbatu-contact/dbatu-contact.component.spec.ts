import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbatuContactComponent } from './dbatu-contact.component';

describe('DbatuContactComponent', () => {
  let component: DbatuContactComponent;
  let fixture: ComponentFixture<DbatuContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbatuContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbatuContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
