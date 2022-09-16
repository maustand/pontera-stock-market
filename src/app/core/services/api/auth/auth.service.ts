import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuth } from 'src/app/core/models/auth';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly entryPoint: string;

  constructor(private http: HttpClient) {
    // no entryPoint. RealWorld RestApi should be : `${environment.serverEntryPointURL}/auth`
    this.entryPoint = `${environment.serverApiURI}`;
  }

  signUp(user: UserAuth) {
    let body = new URLSearchParams();
    body.set('email', user.email);
    body.set('password', user.password);

    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };

    return this.http.post<null>(`${this.entryPoint}/signup`,  body.toString(), options);
  }

  signIn(user: UserAuth) {
    return this.http.post<string>(`${this.entryPoint}/signin`, user); // should return 204 instead of 200
  }
}
