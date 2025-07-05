import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouteTypeService {
  fullUrl: string = window.location.href;
  isSecurePage(): boolean {
    return this.fullUrl.includes('/secure');
  }

  isPublicPage(): boolean {
    return this.fullUrl.includes('/public');
  }
}
