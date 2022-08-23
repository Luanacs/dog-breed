import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { List } from '../model/List';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  breedList: List[];

  constructor(
    private http: HttpClient
  ) { }

  register(email: User): Observable<User>{
      return this.http.post<User>('https://dogbreed-api.q9.com.br/register', email)
  }
  clear(){
    localStorage.clear()
  }
  isAuthenticated(){
    return (localStorage.getItem('user') !==null ? true : false);
  }

}
