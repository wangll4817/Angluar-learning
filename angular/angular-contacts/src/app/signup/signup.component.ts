import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = {
    email: '',
    password: ''
  }

  email_err_msg = ''
  //在组件类中声明了一个私有成员http，它的类型是httpClient
  //那么Angular会自动去实例化httpClient得到一个实例
  //然后我们就可以在组件中使用http这个成员来调用一些请求方法了
  //例如：http.get  http.post......
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signup(){
   //1.表单验证
   //2.获取表单数据
   //3.发起http请求和服务端交互
   //4.根据响应结果做交互处理
   const formData = this.signupForm
   this.http.post('http://localhost:3000/users', formData).toPromise().then((data: any) => {
        this.email_err_msg = ''
        window.alert('用户注册成功')
        window.localStorage.setItem('auth_token', data.token)
        window.localStorage.setItem('user_info', JSON.stringify(data.user)) 
        this.router.navigate(['/'])
      })
      .catch(err => {
        if (err.status === 409) {
          this.email_err_msg = '邮箱已被占用'
        }
      })
  }
}
