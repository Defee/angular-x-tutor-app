import { Component, OnInit } from '@angular/core';
import { IRole } from 'src/app/@view-models/irole';
import { RoleService } from 'src/app/@data/role.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-role-list',
	templateUrl: './role-list.component.html',
	styleUrls: [ './role-list.component.scss' ]
})
export class RoleListComponent implements OnInit {
	roles: IRole[] = [];
	constructor(private service: RoleService, private router: Router, private currentRoute: ActivatedRoute) {}

	ngOnInit() {
		this.service
			.get()
			.then((data) => {
				this.roles = data;
			})
			.catch((err) => {
				console.error('Error initing the roles', err);
			});
	}

	onEditClick($event: any, role: IRole) {
		this.router.navigate([ 'roles/save', role.id ]);
	}

	onDetailsClick($event: any, role: IRole) {
		this.router.navigate([ 'roles/info', role.id ]);
	}
}
