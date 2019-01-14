import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/@data/role.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IRole } from 'src/app/@view-models/irole';
import { Role } from 'src/app/@view-models/role';

@Component({
	selector: 'app-save-role',
	templateUrl: './save-role.component.html',
	styleUrls: [ './save-role.component.scss' ]
})
export class SaveRoleComponent implements OnInit {
	role: IRole = new Role({ name: '' });
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

	onSubmit() {
		if (this.role.id > 0) {
			this.service
				.update(this.role)
				.then((res) => {
					this.router.navigate([ './' ]);
				})
				.catch((err) => console.error('some problem updating the role', err));
		} else {
			this.service
				.create(this.role)
				.then((res) => {
					this.router.navigate([ './' ]);
				})
				.catch((err) => console.error('some problem creating the role', err));
		}
	}
}
