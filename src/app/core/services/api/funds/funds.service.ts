import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fund } from '@core/models/funds';
import { environment } from '@env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FundsService {
  private readonly entryPoint: string;

  constructor(private http: HttpClient) {
    // no entryPoint. RealWorld RestApi should be : `${environment.serverEntryPointURL}/funds`
    this.entryPoint = `${environment.serverApiURI}`;
  }

  all() {
    return this.http.get<Fund[]>(`${this.entryPoint}/funds`);
  }

  show(symbol: string) {
    return this.http.get<Fund>(`${this.entryPoint}/${symbol}`);
  }
}
