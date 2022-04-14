import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { MembershipPricingComponent } from './membership-pricing/membership-pricing.component';
import { MembershipRoutingModule } from './membership-routing.module';
import { MembershipCampaignComponent } from './membership-campaign/membership-campaign.component';
import { MembershipTaskListComponent } from './membership-task-list/membership-task-list.component';

@NgModule({
  declarations: [ MembershipPricingComponent, MembershipCampaignComponent, MembershipTaskListComponent],
  imports: [
    CommonModule,  
    MembershipRoutingModule,
   
  ]
})

export class MembershipModule { }