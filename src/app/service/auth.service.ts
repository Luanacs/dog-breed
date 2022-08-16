import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register(email: Register): Observable<Register>{
      return this.http.post<Register>('https://dogbreed-api.q9.com.br/register', email)
  }
}
