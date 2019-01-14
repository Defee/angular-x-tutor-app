import { Glossary } from './glossary';
import { IGlossary } from './iglossary';
import { IRole } from './irole';
export class Role extends Glossary implements IRole {
	constructor(options: any = {}) {
		super(options);
		this.childRoleId = options['childRoleId'] || null;
	}
	childRoleId?: number;
}
