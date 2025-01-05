import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSuccessfullySentComponent } from './email-successfully-sent.component';

describe('EmailSuccessfullySentComponent', () => {
  let component: EmailSuccessfullySentComponent;
  let fixture: ComponentFixture<EmailSuccessfullySentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailSuccessfullySentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailSuccessfullySentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
