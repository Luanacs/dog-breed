import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../model/register';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register(email: Register): Observable<User>{
      return this.http.post<User>('https://dogbreed-api.q9.com.br/register', email)
  }

}
