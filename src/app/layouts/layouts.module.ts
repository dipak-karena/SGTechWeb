import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
// import { UIModule } from '../shared/ui/ui.module';
//import { LayoutComponent } from './layout.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { TopbarComponent } from './topbar/topbar.component';
// import { FooterComponent } from './footer/footer.component';
// import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
// import { HorizontalComponent } from './horizontal/horizontal.component';
// import { VerticalComponent } from './vertical/vertical.component';
// import { HorizontaltopbarComponent } from './horizontaltopbar/horizontaltopbar.component';

import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../core/services/common/language.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { CommonPdfViewerModule } from '../shared/components/common-pdf-viewer/common-pdf-viewer.module';
//import { ModalModule } from '../shared/components/modal/modal.module';
import { ErrorSummaryModule } from '../shared/components/error-summary/error-summary.module';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from '../core/core.module';
import { TopHeaderComponent } from './layout/top-header/top-header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({

  declarations: [LayoutComponent, TopHeaderComponent, SidebarComponent,],
  imports: [
     CommonModule,
    // TranslateModule,    
    NgbDropdownModule,
    // UIModule,
    // FormsModule,
    // ReactiveFormsModule,    
    // CommonPdfViewerModule,
    ClickOutsideModule,
    SimplebarAngularModule,
    RouterModule,
    CoreModule,
    ErrorSummaryModule,
  ],
  providers: [LanguageService]
})

export class LayoutsModule { }