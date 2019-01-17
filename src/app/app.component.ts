import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'MemberhipManager';
	navLinks: any[] = [
		{
			path: '/roles',
			label: 'Roles'
		},
		{
			path: '/users',
			label: 'Users'
		}
	];
}
