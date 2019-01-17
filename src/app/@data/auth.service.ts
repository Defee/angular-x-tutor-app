import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private httpClient: HttpClient) {}

	testService(): Promise<any> {
		const url = 'https://prosperia.tk/api/metric/get';

		const options: any = {
			headers: null,
			body: {}
		};
		return this.httpClient.post(url, options.body, options).toPromise();
	}
}
