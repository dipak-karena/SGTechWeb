import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardsRoutingModule } from './dashboards-routing.module';
// import { UIModule } from '../../shared/ui/ui.module';
// import { WidgetModule } from '../../shared/widget/widget.module';
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
// import { SimplebarAngularModule } from 'simplebar-angular';
import { DefaultComponent } from './default/default.component';
// import { TableModule } from 'primeng/table';
// import { BreadcrumbModule } from 'primeng/breadcrumb';
// import { MultiSelectModule } from "primeng/multiselect";
// import { CommonGridModule } from '../../shared/components/common-grid/common-grid.module';
// import { ModalModule } from 'src/app/shared/components/modal/modal.module';
// import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
   
    DashboardsRoutingModule,
   // UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    // WidgetModule,
    // SimplebarAngularModule,
    // TableModule,
    // BreadcrumbModule,
    // MultiSelectModule,
    // CommonGridModule,
    // ModalModule,
    // ChartsModule
  ]
})

export class DashboardsModule { }