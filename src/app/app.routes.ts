import { Routes } from '@angular/router';
import { RoleSelectorComponent } from './role-selector/role-selector.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

export const routes: Routes = [
  { path: 'role-selector', component: RoleSelectorComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-detail', component: EmployeeDetailComponent },
  { path: '**', component: RoleSelectorComponent },
];
