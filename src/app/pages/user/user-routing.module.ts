import { UserListComponent } from './user-list/user-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveUserComponent } from './save-user/save-user.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: UserListComponent
			},
			{
				path: 'info/:id',
				component: UserInfoComponent
			},
			{
				path: 'list',
				component: UserListComponent
			},
			{
				path: 'save/:id',
				component: SaveUserComponent
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class UserRoutingModule {}
