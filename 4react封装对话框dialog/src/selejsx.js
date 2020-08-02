import React from "react";
//createElement方法
//render方法

/**
 *
 * @param type 元素名 h1
 * @param props 元素class 元素ID 元素style
 * @param children 要插入的元素、
 * 执行createElement做了什么事情？
 * 1. 创建一个对象（默认有四个属性：type/props/ref/key）最后把这个对象返回
 * 2. 根据传递的值修改这个对象
 *      type=>传递的type
 *      props需要做一些处理：大部分传递props中的属性都赋值给对象的props，有一些比较特殊==>
 *          如果是ref或者是key我们需要把传递的props中的这两个属性值，给创建对象的两个属性，而传递的props中把这两个值删除掉
 *          把传递的children作为新创建对象的props中的一个属性
 * 
 * createElement创建jsx对象的参数最少两个type/props,children这个部分有可能没有有可能多个
 */
function createElement(type,props,...children) {
  //创建一个对象，设置一些默认值
  let obj={
    type:null,
    props:{
      children:""
    },
    ref:null,
    key:null
  }
  //用传递的type和props覆盖原有的默认值
  //简单写法
  // obj={...obj,type,props}//{type:type,props:props}
  //复杂写法
  obj={...obj,type,props:{...props,children}}
  //把ref和key提取出来(并且删除props中的属性)
  'key' in obj.props?(obj.key=obj.props.key,obj.props.key=undefined):null
  'ref' in obj.props?(obj.ref=obj.props.ref,obj.props.ref=undefined):null
  return obj
}

let objJSX=createElement("h1",
    {id: 'titleBox', className: 'title', style: {color:"red"}},
    "\u5B66\u4E60")



/**
 * 
 * @param {*} obj 
 * @param {*} container 
 * @param {*} callback 
 * render函数的作用：把创建的对象生成对应的dom元素，最后插入到页面中
 */
function render (obj,container,callback){
  let {type,props}=obj||{}
  newElement=document.createElement(type)
  for(let attr in props){
    if (!props.hasOwnProperty(attr)) break//不是私有的直接结束遍历
    if(!props[attr])continue//如果当前属性没有值，直接不处理即可
    let value=props[attr]
    //className的处理
    if (attr==='className') {
      newElement.setAttribute('class',value)
      continue
    }
    //style的处理
    if (attr === 'style' ) {
      if(valye === '') continue
      for(let styKey in value){
        if (value.hasOwnProperty(styKey)) {
          newElement['style'][styKey]=value[styKey]
        }
      }
      continue
    }
    //处理children
    if (attr === 'children') {
      if (typeof value === 'string') {
        let text=document.createTextNode(value)
        newElement.appendChild(text)
      }
      continue
    }
    newElement.setAttribute(attr,value)//基于setattribute可以让设置的属性表现在html结构上
  }

  container.appendChild(newElement)
  callback&&callback()
}
render(objJSX,root,()=>{
  console.log(111111);
})


