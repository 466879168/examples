//每一个组件中都要导入react，因为需要基于他的createElement进行解析渲染
import React from "react";

//对话框组件
//函数式声明组件
/**
 * 函数式声明组件
 * 1. 函数返回结果是一个新的jsx（也就是当前组件的jsx组件）
 * 2. props变量存储的值是一个对象，宝坏了调取组件时候传递的属性值（不传递是一个空对象）
 */
export default function dialog (props) {
  console.log(props);
  let {con,lx=0,children,style={}}=props,
  title=lx===0?'系统提示':'系统警告'
//children:可能有坑没有，坑只是一个值，也可能是一个数组，坑每一项是一个字符串，也可能是一个对象等（都代表闭合组件中的子组件）
  return <section style={style}>
    <h2>{title}</h2>
    <div>{con}</div>
    {/*直接放children*/}
    {children}
    {/**第二种方法基于react中提供的专门的遍历方法children */}
    {React.children.map(children,item=>item)}
  </section>
}