import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Register } from '../model/register';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  register: Register=new Register


  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit()   {
    window.scroll(0,0)
    this.register.email
  }
  registrar(){
    this.auth.register(this.register).subscribe({next: ((resp: Register) => {
      this.register=resp;
      environment.token=this.register.token;
      this.router.navigate(['/list'])
    }),
    error: erro => {
      if(erro.status == 401){
        alert('Usuário ou senha está incorreta.')
      }
    }
  })
}

  

}