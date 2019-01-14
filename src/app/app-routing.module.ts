import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	// { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
	{ path: 'roles', loadChildren: './pages/role/role.module#RoleModule' },
	{ path: 'users', loadChildren: './pages/user/user.module#UserModule' },
	{ path: '', redirectTo: 'roles', pathMatch: 'full' }
	// { path: '**', redirectTo: 'roles' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
