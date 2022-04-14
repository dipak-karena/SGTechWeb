import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipCampaignComponent } from './membership-campaign.component';

describe('MembershipCampaignComponent', () => {
  let component: MembershipCampaignComponent;
  let fixture: ComponentFixture<MembershipCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
