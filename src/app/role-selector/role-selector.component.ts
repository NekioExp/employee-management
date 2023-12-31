import { Component } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoleInterface } from '../interfaces/role.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-selector',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './role-selector.component.html',
  styleUrl: './role-selector.component.scss'
})
export class RoleSelectorComponent {
  public roleList: RoleInterface[];
  public selectedRole: RoleInterface | null;

  constructor(private router: Router) {
    this.roleList = [{value: 'user', label: 'User'}, {value: 'admin', label: 'Admin'}];
    this.selectedRole = null;
  }

  goForward() {
    this.router.navigate(['/employee-list']);
  }

}
