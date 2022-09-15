import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuth } from 'src/app/core/models/auth';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly entryPoint: string;

  constructor(private http: HttpClient) {
    // no entryPoint. RealWorld RestApi should be : `${environment.serverEntryPointURL}/auth`
    this.entryPoint = `${environment.serverApiURI}`;
  }

  signUp(user: UserAuth) {
    return this.http.post<null>(`${this.entryPoint}/signup`, user);
  }

  signIn(user: UserAuth) {
    return this.http.post<string>(`${this.entryPoint}/signin`, user); // should return 204 instead of 200
  }

}
