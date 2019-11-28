import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }


  //同步方法
  getData() {
    return 'this is service data';
  }

  getCallbackData(cb) {

    setTimeout(() => {

      var username: string = '张三';
      cb(username);

    }, 3000);
  }

  getPromiseData() {

    return new Promise((resolve) => {

      setTimeout(() => {

        var username: string = '张三--Promise';
        resolve(username);
      }, 3000);
    })
  }

  getRxjsData(){

    return new Observable((observer) => {
      setTimeout(() => {

        var username: string = '张三--Rxjs';
        observer.next(username);
        // observer.error('数据');
      }, 3000);
    })
  }

  //多次执行
  getPromiseIntervalData() {

    return new Promise((resolve) => {

      setInterval(() => {

        var username: string = '张三--Promise  Interval';
        resolve(username);
      }, 1000);
    })
  }

  getRxjsIntervalData(){

    let count =0;
    return new Observable((observer) => {    
      setInterval(() => {
        count++;
        var username: string = '张三--Rxjs  Interval' + count;
        observer.next(username);
        // observer.error('数据');
      }, 3000);
    })
  }
}
