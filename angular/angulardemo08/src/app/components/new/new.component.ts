import { Component, OnInit } from '@angular/core';
//当做一个服务
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor( public http:HttpClient) { }

  ngOnInit() {
  }

  getData(){
    // alert('执行get请求');
    this.http.get()
  }
}
