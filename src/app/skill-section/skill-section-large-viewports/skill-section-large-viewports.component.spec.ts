import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSectionLargeViewportsComponent } from './skill-section-large-viewports.component';

describe('SkillSectionLargeViewportsComponent', () => {
  let component: SkillSectionLargeViewportsComponent;
  let fixture: ComponentFixture<SkillSectionLargeViewportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillSectionLargeViewportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillSectionLargeViewportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
