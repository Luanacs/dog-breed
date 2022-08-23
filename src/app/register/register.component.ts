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
    // this.user.email;
  }
  registrar() {
    this.auth.register(this.user).subscribe({
      next: (resp: any) => {
        console.log(resp);
        if (resp > 0) {
          if (this.user.token == resp[0].token) {
            delete resp[0].token;
            this.localStorageService.set('token', resp[0].user.token);
            alert('Email logado com sucesso');
          } }
        this.router.navigate(['/list']);
      },
    });
  }
}
