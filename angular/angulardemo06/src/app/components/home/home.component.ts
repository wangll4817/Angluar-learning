import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title:string = '首页组件标题';
  public msg: string = '我是父组件的一个msg';
  constructor() { }

  ngOnInit() {
  }

  run(){
    alert('我是父组件的run方法');
  }
}
