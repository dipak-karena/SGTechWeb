import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './dashboards/default/default.component';
//import { FilemanagerComponent } from './mastercompany/filemanager/filemanager.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
   { path: 'membership', loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) },
  // { path: 'account', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  // { path: 'email', loadChildren: () => import('./mastercompany/usermail/usermail.module').then(m => m.UsermailModule) },  
  // { path: 'company', loadChildren: () => import('./mastercompany/company/company.module').then(m => m.CompanyModule) },
  // { path: 'other', loadChildren: () => import('./other/employee/employee.module').then(m => m.EmployeeModule) },
  // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  // { path: 'singlescreen/:page', loadChildren: () => import('./setupscreen/setup-screen.module').then(m => m.SetupScreenModule) },
  // { path: 'company-settings', loadChildren: () => import('./mastercompany/company-setting/company-settings.module').then(m => m.CompanySettingsModule) },
  // { path: 'filemanager',component:FilemanagerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }