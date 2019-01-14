import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { SaveUserComponent } from './save-user/save-user.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
	declarations: [ UserListComponent, SaveUserComponent, UserInfoComponent ],
	imports: [ CommonModule, UserRoutingModule, FormsModule, ReactiveFormsModule ]
})
export class UserModule {}
