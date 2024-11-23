import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeLargeViewportsComponent } from './about-me-large-viewports.component';

describe('AboutMeLargeViewportsComponent', () => {
  let component: AboutMeLargeViewportsComponent;
  let fixture: ComponentFixture<AboutMeLargeViewportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeLargeViewportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeLargeViewportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
