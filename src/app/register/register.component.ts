import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../model/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  register: Register=new Register


  constructor(
    
    private router: Router
  ) { }

  ngOnInit()   {
    window.scroll(0,0)
    this.register.email
  }

  

}