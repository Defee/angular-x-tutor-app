import { IGlossary } from './iglossary';

export class Glossary implements IGlossary {
	constructor(options: any = {}) {
		this.id = options['id'] || 0;
		this.name = options['name'] || 'Default Name';
		this.isActive = options['isActive'] || true;
	}
	id: number;
	name: string;
	isActive: boolean;
}
