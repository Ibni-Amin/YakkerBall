import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CsrfTokenService {
  url = 'https://yakkerball.com/api/application';
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(this.url);
  }
}
