import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//引入表单相关的模块 才可以用双向数据绑定
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

//引入并且配置服务
import { StorageService } from './services/storage.service';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
