import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/@data/role.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IRole } from 'src/app/@view-models/irole';
import { Role } from 'src/app/@view-models/role';

@Component({
	selector: 'app-role-info',
	templateUrl: './role-info.component.html',
	styleUrls: [ './role-info.component.scss' ]
})
export class RoleInfoComponent implements OnInit {
	role: IRole = new Role({});
	constructor(private service: RoleService, private router: Router, private currentRoute: ActivatedRoute) {}

	ngOnInit() {
		const id = +this.currentRoute.snapshot.paramMap.get('id');
		this.service
			.getById(id)
			.then((data) => {
				this.role = data;
			})
			.catch((err) => console.error('error getting role:', err));
	}
	onEditClick($event: any, role: IRole) {
		this.router.navigate([ 'roles/save', role.id ]);
	}

	onListClick($event: any, role: IRole) {
		this.router.navigate([ './' ]);
	}
}
