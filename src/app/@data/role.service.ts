import { Role } from './../@view-models/role';
import { IRole } from './../@view-models/irole';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class RoleService {
	// roles: IRole[] = [];
	tableName = 'roles';
	constructor() {
		const rolesInStorage = JSON.parse(sessionStorage.getItem(this.tableName)) as IRole[];
		if (rolesInStorage == null || rolesInStorage === undefined) {
			const roles = [ new Role({ id: 1, name: 'Admin' }), new Role({ id: 2, name: 'User' }) ];
			sessionStorage.setItem(this.tableName, JSON.stringify(roles));
		}
	}

	get(): Promise<IRole[]> {
		return Promise.resolve(JSON.parse(sessionStorage.getItem(this.tableName)) as IRole[]);
	}
	getById(roleId: number): Promise<IRole> {
		const roles = JSON.parse(sessionStorage.getItem(this.tableName)) as IRole[];
		return Promise.resolve(roles.find((x) => x.id === roleId));
	}

	update(role: IRole): Promise<IRole> {
		const roles = JSON.parse(sessionStorage.getItem(this.tableName)) as IRole[];
		const index = roles.findIndex((x) => x.id === role.id);
		roles[index] = role;
		sessionStorage.setItem(this.tableName, JSON.stringify(roles));
		return Promise.resolve(role);
	}

	create(role: IRole): Promise<IRole> {
		const roles = JSON.parse(sessionStorage.getItem(this.tableName)) as IRole[];
		const ids = roles.map((it) => {
			return +it.id;
		});
		let maxId = Math.max.apply(0, ids);
		maxId++;
		role.id = maxId;
		roles.push(role);
		sessionStorage.setItem(this.tableName, JSON.stringify(roles));
		return Promise.resolve(role);
	}

	delete(role: IRole): Promise<IRole> {
		const roles = JSON.parse(sessionStorage.getItem(this.tableName)) as IRole[];
		const index = roles.indexOf(role);
		roles.splice(index, 1);
		sessionStorage.setItem(this.tableName, JSON.stringify(roles));
		return Promise.resolve(role);
	}
}
