import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { Register } from '../model/register';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  token: any;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.token = this.localStorageService.get('token');
    console.log(this.token);
    if (this.validToken(this.token)) {
      console.log('to aqui');
      this.router.navigate(['/register']);
    }
  }
  validToken(token: any) {
    return Object.keys(token).length === 0;
  }
}
