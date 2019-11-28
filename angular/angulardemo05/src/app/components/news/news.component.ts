/* 
ViewChild获取dom节点
1.模板中给dom起一个名字
<div #myBox>
    我是一个dom节点
</div>

2.在业务逻辑里面引入ViewChild
import { Component, OnInit, ViewChild } from '@angular/core';

3.写在类里面
 //获取dom节点   需要加入{static: true}，不然会误报
  @ViewChild('myBox', {static: true}) myBox: any;

4.ngAfterViewInit()生命周期函数里面获取dom
this.myBox.nativeElement
*/




import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  //获取dom节点   需要加入{static: true}，不然会误报
  @ViewChild('myBox', { static: true }) myBox: any;

  //获取组件
  @ViewChild('header', { static: true }) header: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.myBox.nativeElement);
    this.myBox.nativeElement.style.width = "100px";
    this.myBox.nativeElement.style.height = "100px";
    this.myBox.nativeElement.style.background = "red";
    console.log(this.myBox.nativeElement.innerHTML);



  }

  getChildRun() {
    //调用子组件里的方法
    this.header.run();
  }
}
