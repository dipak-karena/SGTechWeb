import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembershipPricingComponent } from './membership-pricing/membership-pricing.component';
import { MembershipCampaignComponent } from './membership-campaign/membership-campaign.component';
import { MembershipTaskListComponent } from './membership-task-list/membership-task-list.component';


const routes: Routes = [
    { path: 'membership-pricing', component: MembershipPricingComponent    },
    { path: 'membership-campaign', component: MembershipCampaignComponent    },
    { path: 'membership-task-list', component: MembershipTaskListComponent    }

   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MembershipRoutingModule {}