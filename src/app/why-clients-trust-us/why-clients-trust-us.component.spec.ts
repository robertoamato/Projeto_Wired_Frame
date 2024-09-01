import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyClientsTrustUsComponent } from './why-clients-trust-us.component';

describe('WhyClientsTrustUsComponent', () => {
  let component: WhyClientsTrustUsComponent;
  let fixture: ComponentFixture<WhyClientsTrustUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyClientsTrustUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyClientsTrustUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
