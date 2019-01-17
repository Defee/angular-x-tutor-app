import { AuthService } from './@data/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonInterceptor } from './interceptors/common-interceptor';
import {
	MatMenuModule,
	MatButtonModule,
	MatIconModule,
	MatCardModule,
	MatSidenavModule,
	MatToolbarModule,
	MatTabsModule,
	MatDividerModule
} from '@angular/material';
@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		MatMenuModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatSidenavModule,
		MatToolbarModule,
		MatTabsModule,
		MatDividerModule
	],
	providers: [
		AuthService,
		HttpClient,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: CommonInterceptor,
			multi: true
		}
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
