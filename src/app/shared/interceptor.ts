import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
        var token: string = localStorage.getItem('token'); 
        var header = {"authorization":token};
        var newReq = request.clone({ headers: request.headers.set('Authorization', token) });
       
        return next.handle(newReq);
    }
}