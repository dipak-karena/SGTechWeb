import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbNavModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
// import { FullCalendarModule } from '@fullcalendar/angular';
// import { SimplebarAngularModule } from 'simplebar-angular';
// import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
// import interactionPlugin from '@fullcalendar/interaction'; // a plugin
// import bootstrapPlugin from "@fullcalendar/bootstrap";
// import { LightboxModule } from 'ngx-lightbox';
// import { WidgetModule } from '../shared/widget/widget.module';
// import { UIModule } from '../shared/ui/ui.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { HttpClientModule } from '@angular/common/http';
import { MembershipModule } from './membership/membership.module';
// import { ProfileModule } from './profile/profile.module';
// import { CompanyListComponent } from './mastercompany/company/company-list/company-list.component';
// import { CompanyEditComponent } from './mastercompany/company/company-edit/company-edit.component';
// import { CompanySettingListComponent } from './mastercompany/company-setting/company-setting-list/company-setting-list.component';
// import { CompanySettingEditComponent } from './mastercompany/company-setting/company-setting-edit/company-setting-edit.component';
// import { FilemanagerComponent } from './mastercompany/filemanager/filemanager.component';


// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   dayGridPlugin,
//   interactionPlugin,
//   bootstrapPlugin
// ]);

@NgModule({
  declarations: [
  
   // FilemanagerComponent
  ],
  imports: [
    // CommonModule,
    // FormsModule,
    // NgbDropdownModule,
    // NgbModalModule,
     PagesRoutingModule,
     MembershipModule
    // ReactiveFormsModule,
    // DashboardsModule,
    // //ProfileModule,
    // HttpClientModule,
    // UIModule,
    // WidgetModule,
    // FullCalendarModule,
    // NgbNavModule,
    // NgbTooltipModule,
    // NgbCollapseModule,
    // SimplebarAngularModule,
    // LightboxModule
  ],
})
export class PagesModule { }