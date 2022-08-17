import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() { 
    this.storage=window.localStorage
  }
  set(key:string,value:string):boolean{
    if(this.storage){
    this.storage.setItem(key,JSON.stringify(value));
    return true;
  }
  return false; 
  // depois tratar o erro implementando a opção de armazenamento de cookies
}
  get(key: string): any{
    if(this.storage ){
      return JSON.parse(this.storage.getItem(key) || '{}');
    }
    return null;
  }
  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }

}
