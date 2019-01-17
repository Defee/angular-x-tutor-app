import { tap } from 'rxjs/operators';
import { Injector, Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpResponse,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
	constructor() {
		// private inj: Injector
		// inject auth service here.
		// this.auth = inj.get(AuthService);
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			tap(
				(event: HttpEvent<any>) => {
					if (event instanceof HttpResponse) {
						console.debug('request', req);
						console.debug(`call result for ${event.url}`, event);
					}
				},
				(err: any) => {
					if (err instanceof HttpErrorResponse) {
						console.debug('error', err);
						if (err.status === 401) {
							// Handle auth there if needed
							// this.auth.authorize();
						}
					}
				}
			)
		);
	}
}
