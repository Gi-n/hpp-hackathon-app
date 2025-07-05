import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonContentService {

  constructor(private http: HttpClient) { }

  private getMarketFromHost(): string {
    const host = window.location.host.toLowerCase();
    // http://test.bayer.in or http://test.bayer.us or http://test.bayer.uk
    if (host.endsWith('.us')) {
      return 'US';
    } else if (host.endsWith('.uk')) {
      return 'UK';
    } else if (host.endsWith('.in')) {
      return 'IN';
    } else {
      return '';
    }
  }

getJson(fileName: string): Observable<any> {
    const cleanName = fileName.replace(/\.json$/, '');
    const market = this.getMarketFromHost();
    const primary = market ? `assets/data/${cleanName}_${market}.json` : '';
    const defaultPath = `assets/data/${cleanName}.json`;

    // Try market-specific file first, fallback to default if it fails
    return this.http.get(primary || defaultPath).pipe(
      catchError(() => this.http.get<any>(defaultPath))
    );
  }
}
