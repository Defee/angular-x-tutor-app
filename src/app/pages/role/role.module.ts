import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleListComponent } from './role-list/role-list.component';
import { SaveRoleComponent } from './save-role/save-role.component';
import { RoleInfoComponent } from './role-info/role-info.component';
import { FormsModule } from '@angular/forms';
@NgModule({
	declarations: [ RoleListComponent, SaveRoleComponent, RoleInfoComponent ],
	imports: [ CommonModule, RoleRoutingModule, FormsModule ]
})
export class RoleModule {}
