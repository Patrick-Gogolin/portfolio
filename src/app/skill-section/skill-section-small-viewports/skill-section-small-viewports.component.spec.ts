import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSectionSmallViewportsComponent } from './skill-section-small-viewports.component';

describe('SkillSectionSmallViewportsComponent', () => {
  let component: SkillSectionSmallViewportsComponent;
  let fixture: ComponentFixture<SkillSectionSmallViewportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillSectionSmallViewportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillSectionSmallViewportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
