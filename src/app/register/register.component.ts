import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { LocalStorageService } from '../local-storage.service';
import { Register } from '../model/register';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();

  constructor(
    private auth: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.register.email;
  }
  registrar() {
    this.auth.register(this.register).subscribe({
      next: (resp: any) => {
        this.localStorageService.set('token', resp.user.token);
        console.log(resp);
        this.router.navigate(['/list']);
      },
    });
  }
}
