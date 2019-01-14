import { UserService } from './../../../@data/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/@view-models/iuser';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/@view-models/user';
import { IRole } from 'src/app/@view-models/irole';

@Component({
	selector: 'app-user-info',
	templateUrl: './user-info.component.html',
	styleUrls: [ './user-info.component.scss' ]
})
export class UserInfoComponent implements OnInit {
	user: IUser = new User({});
	constructor(private service: UserService, private router: Router, private currentRoute: ActivatedRoute) {}

	ngOnInit() {
		const id = +this.currentRoute.snapshot.paramMap.get('id');
		this.service
			.getById(id)
			.then((data: IUser) => {
				this.user = data;
			})
			.catch((err) => console.error('error getting role:', err));
	}
	onEditClick($event: any, user: IUser) {
		this.router.navigate([ 'roles/save', user.id ]);
	}

	onListClick($event: any) {
		this.router.navigate([ './' ]);
	}
	aggregateRoles(user: IUser): string {
		let result = '';
		if (user.roles == null || user.roles.length === 0) {
			return result;
		}
		// tslint:disable-next-line:forin
		for (let index = 0; index < user.roles.length; index++) {
			const element = user.roles[index];
			result += element.name;
		}
		return result;
	}
}
