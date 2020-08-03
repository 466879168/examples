import React from "react";
import ReactDOM,{render} from "react-dom";//从react-dom中导入一个reactdom，逗号后面的内容是吧reactdom这个对象进行进行解构==>import {render} from "react-dom"
//导入组件的方式
import dialog from './components/dialog'

let styleObj={
    color:"red",
}




const root=document.querySelector('#root')
render(<h1 id={'titleBox'} className={'title'} style={styleObj}>
    学习
    {/**jsx中加注释需要用这种方式 */}
</h1>,root)