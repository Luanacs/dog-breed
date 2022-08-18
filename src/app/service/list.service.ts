import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LocalStorageService } from '../local-storage.service';
import { List } from '../model/List';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  breedList: List[];

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  token = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }).set(
      'Authorization',
      this.localStorageService.get('token'),
    ),
  }

  getAllPets(): Observable<List[]> {
    console.log(this.token)
    return this.http.get<List[]>('https://dogbreed-api.q9.com.br/list',this.token);
  }
}
