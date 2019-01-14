import { IRole } from './../@view-models/irole';
import { Role } from './../@view-models/role';
import { Injectable } from '@angular/core';
import { IUser } from '../@view-models/iuser';
import { User } from '../@view-models/user';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	// users: IUser[] = [];
	tableName = 'users';
	constructor() {
		const usersInStorage = JSON.parse(sessionStorage.getItem(this.tableName)) as IUser[];
		if (usersInStorage == null || usersInStorage === undefined) {
			const users = [
				new User({
					id: 1,
					name: 'Alex',
					roles: [ new Role({ id: 1, name: 'Admin' }), new Role({ id: 2, name: 'User' }) ]
				}),
				new User({
					id: 2,
					name: 'Nandik',
					roles: [ new Role({ id: 1, name: 'Admin' }), new Role({ id: 2, name: 'User' }) ]
				}),
				new User({
					id: 3,
					name: 'Hemant',
					roles: [ new Role({ id: 2, name: 'User' }) ]
				}),
				new User({
					id: 4,
					name: 'Mary',
					roles: [ new Role({ id: 2, name: 'User' }) ]
				})
			];
			sessionStorage.setItem(this.tableName, JSON.stringify(users));
		}
	}

	get(): Promise<IUser[]> {
		return Promise.resolve(JSON.parse(sessionStorage.getItem(this.tableName)) as IUser[]);
	}
	getById(userId: number): Promise<IUser> {
		const users = JSON.parse(sessionStorage.getItem(this.tableName)) as IUser[];
		return Promise.resolve(users.find((x) => x.id === userId));
	}
	update(user: IUser): Promise<IUser> {
		const users = JSON.parse(sessionStorage.getItem(this.tableName)) as IUser[];
		const index = users.findIndex((x) => x.id === user.id);
		users[index] = user;
		sessionStorage.setItem(this.tableName, JSON.stringify(users));
		return Promise.resolve(user);
	}

	create(user: IUser): Promise<IUser> {
		const users = JSON.parse(sessionStorage.getItem(this.tableName)) as IUser[];
		const ids = users.map((it) => {
			return +it.id;
		});
		let maxId = Math.max.apply(0, ids);
		maxId++;
		user.id = maxId;
		users.push(user);
		sessionStorage.setItem(this.tableName, JSON.stringify(users));
		return Promise.resolve(user);
	}

	delete(user: IUser): Promise<IUser> {
		const users = JSON.parse(sessionStorage.getItem(this.tableName)) as IUser[];
		const index = users.indexOf(user);
		users.splice(index, 1);
		sessionStorage.setItem(this.tableName, JSON.stringify(users));
		return Promise.resolve(user);
	}

	getRoles(userId: number): Promise<IRole[]> {
		const users = JSON.parse(sessionStorage.getItem(this.tableName)) as IUser[];
		const usr = users.find((x) => x.id === userId);
		return Promise.resolve(usr == null ? null : usr.roles);
	}
	isInRole(userId: number, roleName: string): Promise<boolean> {
		const users = JSON.parse(sessionStorage.getItem(this.tableName)) as IUser[];
		const usr = users.find((x) => x.id === userId);
		return Promise.resolve(usr == null ? false : usr.roles.some((x) => x.name === roleName));
	}
}
