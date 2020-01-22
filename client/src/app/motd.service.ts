import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirebaseApp } from '@angular/fire';
import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

class MotdResponse {
  motd: string
}

@Injectable({
  providedIn: 'root'
})
export class MotdService {

  constructor(private app: FirebaseApp, private http: HttpClient) { }

  // See https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8
  // for how you would accomplish this using an interceptor in production code so your 
  // API logic is not litered with auth details
  getMotd(): Observable<MotdResponse> {
    // Get the current user (if it exists) and then get their auth JWT (async call)
    return of(this.app.auth().currentUser).pipe(
      mergeMap((user) => (user === null) ? of(null) : user.getIdToken()),
      map((token) => (token === null) ? {} : {
        'Authorization': `Bearer ${token}`
      }),
      mergeMap((headers) => this.http.get<MotdResponse>(
        `${environment.baseUrl}/api/motd`,
        {
          headers: headers
        })
      )
    )
  }
}
