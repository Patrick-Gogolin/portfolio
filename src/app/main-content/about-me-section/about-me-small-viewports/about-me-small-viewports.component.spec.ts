import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeSmallViewportsComponent } from './about-me-small-viewports.component';

describe('AboutMeSmallViewportsComponent', () => {
  let component: AboutMeSmallViewportsComponent;
  let fixture: ComponentFixture<AboutMeSmallViewportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeSmallViewportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeSmallViewportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
