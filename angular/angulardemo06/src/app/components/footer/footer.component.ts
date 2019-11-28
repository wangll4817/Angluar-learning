import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public msg:string = '我是一个子组件的msg';
  constructor() { }

  ngOnInit() {
  }

  run(){
    alert('我是子组件的run方法');
  }

}
