import { Injectable } from '@angular/core';
import { ApiPaths } from '../../../core/url-properties/api-endpoints';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from '../models/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginURL = ApiPaths.auth.login; // Update with your backend URL

constructor(private http: HttpClient, private router: Router) { }

  login(payload: LoginForm): Observable<any> {
    return this.http.post<any>(this.loginURL, payload);
  }

   logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/public/login']);
  }
}
