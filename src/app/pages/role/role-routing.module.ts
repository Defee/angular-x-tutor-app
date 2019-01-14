import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleInfoComponent } from './role-info/role-info.component';
import { RoleListComponent } from './role-list/role-list.component';
import { SaveRoleComponent } from './save-role/save-role.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: RoleListComponent
			},
			{
				path: 'info/:id',
				component: RoleInfoComponent
			},
			{
				path: 'list',
				component: RoleListComponent
			},
			{
				path: 'save/:id',
				component: SaveRoleComponent
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class RoleRoutingModule {}
