import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbatuComponent } from './dbatu.component';

describe('DbatuComponent', () => {
  let component: DbatuComponent;
  let fixture: ComponentFixture<DbatuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbatuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
