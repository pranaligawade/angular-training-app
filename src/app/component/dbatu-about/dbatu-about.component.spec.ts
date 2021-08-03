import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbatuAboutComponent } from './dbatu-about.component';

describe('DbatuAboutComponent', () => {
  let component: DbatuAboutComponent;
  let fixture: ComponentFixture<DbatuAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbatuAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbatuAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
