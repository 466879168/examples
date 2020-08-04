import React from "react";
import ReactDOM from 'react-dom'
import dialog from './components/dialog'
//单闭合标签只能做一些简单的传入参数 双闭合标签可以在里面添加子元素等等
ReactDOM.render(<div>
  <dialog con="666" />
  <dialog con='嘿嘿嘿' lx={2}>
    {/**属性值不是字符串我们需要使用大括号包起来 */}
  </dialog>
</div>,root)