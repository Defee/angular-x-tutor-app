import { IRole } from './irole';

export interface IUser {
	id: number;
	name: string;
	phone: string;
	isLockedOut: boolean;
	email: string;
	roles: IRole[];
}
