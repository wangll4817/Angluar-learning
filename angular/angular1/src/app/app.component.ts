import { Component } from '@angular/core';

@Component({
  selector: 'app-root',     //使用这个组件的名称
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular1';       //定义属性
  count = 0;
   increment = function(){
     this.count++
   }
}
