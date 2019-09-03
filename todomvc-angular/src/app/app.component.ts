import { Component } from '@angular/core';

const todos = [
  {
  id : 1,
  title: '吃饭',
  done:true
},
{
  id : 2,
  title: '睡觉',
  done:false
},
{
  id : 3,
  title: '写代码',
  done:false
}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos:{
    id: number,
    title: string,
    done: boolean
  }[] = JSON.parse(window.localStorage.getItem('todos') || '[]')

  public currentEditing: {
    id: number,
    title: string,
    done: boolean
  } = null

  addTodo(e): void{
    const titleText = e.target.value
    if(!titleText.length){
      return
    }
    const last = this.todos[this.todos.length - 1]
    this.todos.push({
      id: last ? last.id + 1: 1,
      title: titleText,
      done: false
    })
    //清除文本框
    e.target.value= ''
  }

  get toggleAll(){
    return this.todos.every(t => t.done)
  }

  set toggleAll(val){
      this.todos.forEach(t =>t.done = val)
  }

  removeTodo(index: number){
    this.todos.splice(index, 1)
  }
  
  saveEdit(todo, e){
    //保存编辑
    todo.title = e.target.value
    
    //去除编辑
    this.currentEditing = null
  }

  handleEditKeyUp(e){
    const {keyCode, target} = e
    //取消编辑
    //同时把文本框的值恢复成原来的值
    if(keyCode === 27){
      target.value = this.currentEditing.title
      this.currentEditing = null
    }
  }

  get remaningCount(){
    return this.todos.filter(t => !t.done).length
  }

  //清除所有已完成项
  clearAllDone(){
    this.todos = this.todos.filter(t => !t.done)
  }


  public visibility: string = 'all'

  get filterTodos(){
    if(this.visibility === 'all'){
      return this.todos
    }else if(this.visibility === 'active'){
      return this.todos.filter(t => !t.done)
    }else if(this.visibility === 'completed'){
      return this.todos.filter(t =>t.done)
    }
  }

  //该函数是一个特殊的Angular生命周期钩子函数
  //它会在Angular应用初始化的时候执行一次
  ngOnInit() {
    this.hashchangeHandler()
    //注意：这里要bind this绑定
    window.onhashchange = this.hashchangeHandler.bind(this)
  }
  hashchangeHandler(){
      //当用户点击了锚点的时候，我们需要获取当前锚点标识
      //然后动态的将根组件中的visibility 设置为当前点击的锚点标识
      const hash = window.location.hash.substr(1)
      switch(hash){
        case '/':
          this.visibility = 'all'
          break;
        case '/active':
          this.visibility = 'active'
          break;
        case '/completed':
          this.visibility = 'completed'
          break;
      }
  }

  //当Angular组件数据发送改变的时候，ngDoCheck钩子函数会被触发
  //我们要做的就是在钩子函数里去持久化存储我们的todos数据
  ngDoCheck() {
    window.localStorage.setItem('todos', JSON.stringify(this.todos))
    
  }
}

