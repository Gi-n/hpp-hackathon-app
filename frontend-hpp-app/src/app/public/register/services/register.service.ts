import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPaths } from '../../../core/url-properties/api-endpoints';
import { Observable } from 'rxjs';
import { RegisterForm } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

constructor(private http: HttpClient) { }
  private registerApi = ApiPaths.auth.register;
  register(payload: RegisterForm): Observable<any> {
    return this.http.post<any>(this.registerApi, payload);
  }
}
