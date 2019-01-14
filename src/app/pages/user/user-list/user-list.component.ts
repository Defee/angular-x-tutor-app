import { UserService } from './../../../@data/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/@view-models/iuser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: [ './user-list.component.scss' ]
})
export class UserListComponent implements OnInit {
	users: IUser[] = [];
	constructor(private service: UserService, private router: Router, private currentRoute: ActivatedRoute) {}

	ngOnInit() {
		this.service
			.get()
			.then((data) => {
				this.users = data;
			})
			.catch((err) => {
				console.error('Error initing the roles', err);
			});
	}

	onEditClick($event: any, user: IUser) {
		this.router.navigate([ 'users/save', user.id ]);
	}

	onDetailsClick($event: any, user: IUser) {
		this.router.navigate([ 'users/info', user.id ]);
	}

	aggregateRoles(user: IUser): string {
		let result = '';
		if (user.roles == null || user.roles.length === 0) {
			return result;
		}
		// tslint:disable-next-line:forin
		for (let index = 0; index < user.roles.length; index++) {
			const element = user.roles[index];
			result += element.name + ', ';
		}
		return result;
	}
}
