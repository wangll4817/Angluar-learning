/*这个文件是Angluar根模块，告诉Angular如何组装应用*/ 

//浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
//Angular核心模块
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//根组件
import { AppComponent } from './app.component';

//装饰器，接受一个元数据对象，告诉Angular如何编译和启动应用
@NgModule({
  declarations: [         //配置当前项目运行的组件
    AppComponent
  ],
  imports: [    //依赖模块
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
