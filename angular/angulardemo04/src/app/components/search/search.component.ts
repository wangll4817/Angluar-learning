import { Component, OnInit } from '@angular/core';

//引入服务
import {StorageService} from '../../services/storage.service';

/* //不推荐
var storage = new StorageService;
console.log(storage.get()); */

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyword: string;

  public historyList: any [] = [];

  constructor( public storage: StorageService) {
  //  let s = this.storage.get();
  //  console.log(s);
   }

  ngOnInit() {

    console.log('页面刷新会触发生命周期函数');
    var searchlist: any = this.storage.get('searchlist');
    if(searchlist){
      this.historyList=searchlist;
    }
  }

  doSearch(){

    if(this.historyList.indexOf(this.keyword) == -1){
      this.historyList.push(this.keyword);

      this.storage.set('searchlist', this.historyList);
    }
    this.keyword = '';
    console.log(this.keyword);

  }

  deleteHistory(key){
   
    this.historyList.splice(key, 1);
    this.storage.set('searchlist', this.historyList);
  }
}
