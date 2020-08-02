import React from "react";
import ReactDOM,{render} from "react-dom";//从react-dom中导入一个reactdom，逗号后面的内容是吧reactdom这个对象进行进行解构==>import {render} from "react-dom"
//导入组件的方式
import dialog from './components/dialog'

let styleObj={
    color:"red",
}

/*
1. 基于babel中的语法解析模块（babel-preset-react）把jsx语法编译为react.createElement()结构
"use strict";

render(React.createElement("h1", {
    id: 'titleBox',
    className: 'title',
    style: styleObj
}, "\u5B66\u4E60"), root);
2. 执行React.createElement(type,props,children)会创建一个对象（虚拟dom），对象里面有几个属性 type:h1,props:{id:...,title:...,children...}key:null,ref:null,_proto_:...
3. reactdom.render(jsx语法最后生成的对象，容器)基于render方法把生成的对象动态创建为dom元素，插入到指定的容器中
* */



const root=document.querySelector('#root')
render(<h1 id={'titleBox'} className={'title'} style={styleObj}>
    学习
    {/**jsx中加注释需要用这种方式 */}
</h1>,root)