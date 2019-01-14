import { UserService } from './../../../@data/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/@view-models/iuser';
import { RoleService } from 'src/app/@data/role.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IRole } from 'src/app/@view-models/irole';
import { User } from 'src/app/@view-models/user';

@Component({
	selector: 'app-save-user',
	templateUrl: './save-user.component.html',
	styleUrls: [ './save-user.component.scss' ]
})
export class SaveUserComponent implements OnInit {
	form: FormGroup;
	isInited = false;
	user: IUser = new User({});
	allRoles: IRole[];
	constructor(
		private _formBuilder: FormBuilder,
		private service: UserService,
		private roleService: RoleService,
		private router: Router,
		private currentRoute: ActivatedRoute
	) {}
	ngOnInit() {
		const id = +this.currentRoute.snapshot.paramMap.get('id');
		const initTasks = [];
		initTasks.push(
			this.roleService
				.get()
				.then((res) => {
					console.log(res);
					this.allRoles = res;
				})
				.catch((err) => console.error('error initializing roles', err))
		);
		if (id > 0) {
			initTasks.push(
				this.service
					.getById(id)
					.then((result) => {
						this.user = result;
						this.createForm(this.user);
					})
					.catch((err) => {})
			);
		} else {
			initTasks.push(Promise.resolve(this.createForm(this.user)));
		}

		Promise.all(initTasks).then((res) => (this.isInited = true));
	}

	createForm(user: IUser) {
		const roleIds = user.roles.map((it) => {
			return it.id;
		}) as number[];
		this.form = this._formBuilder.group({
			id: [ user.id || 0, Validators.required ],
			name: [ user.name || '', Validators.required ],
			isLockedOut: [ user.isLockedOut || false, Validators.required ],
			roleIds: [ roleIds || [] ]
		});
	}

	onSubmit() {
		if (this.form.valid && this.form.dirty) {
			this.user = this.form.value as IUser;
			this.user.roles = [];
			for (let i = 0; i < this.form.value.roleIds.length; i++) {
				const element = this.form.value.roleIds[i];
				this.user.roles.push(this.allRoles.find((x) => x.id === element));
			}
			if (this.user.id > 0) {
				this.service
					.update(this.user)
					.then((result) => {
						this.router.navigate([ 'users' ]);
					})
					.catch((err) => {
						console.error('failed to update question', err);
					});
			} else {
				this.service
					.create(this.user)
					.then((result) => {
						this.router.navigate([ 'users' ]);
					})
					.catch((err) => {
						console.error('failed to create question', err);
					});
			}
		}
	}
}
