import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm = {
    email: '',
    password: ''
  }

  email_err_msg = ''

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signin(){
    this.http.post('http://localhost:3000/session', this.signinForm).toPromise().then((data: any) => {
      window.localStorage.setItem('auth_token', data.token)
      window.localStorage.setItem('user_info', JSON.stringify(data.user)) 
      this.router.navigate(['/'])
   //  console.log(data)
     
    })
    .catch(err => {
      if(err.status === 401){
        this.email_err_msg = '登陆失败，邮箱或密码错误'
      }   
      console.log(err)
    })
  }
}
