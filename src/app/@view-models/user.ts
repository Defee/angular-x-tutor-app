import { IUser } from './iuser';
import { IRole } from './irole';

export class User implements IUser {
	constructor(options: any = {}) {
		this.id = options['id'] || 0;
		this.name = options['name'] || 'Default Name';
		this.isLockedOut = options['isLockedOut'] || false;
		this.phone = options['phone'] || '';
		this.email = options['email'] || '';
		this.roles = options['roles'] || '';
	}
	id: number;
	name: string;
	phone: string;
	isLockedOut: boolean;
	email: string;
	roles: IRole[];
}
