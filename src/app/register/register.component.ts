import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { LocalStorageService } from '../local-storage.service';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  constructor(
    private auth: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.user.email;
  }
  registrar() {
    this.auth.register(this.user).subscribe({
      next: (resp: any) => {
        this.localStorageService.set('token', resp.user.token);
        console.log(resp);
        this.router.navigate(['/list']);
      },
    });
  }
}
