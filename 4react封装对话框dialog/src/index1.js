import React from "react";
import ReactDOM from 'react-dom'
import dialog from './components/dialog'
//单笔和标签只能做一些简单的传入参数 双臂和标签可以在里面添加子元素等等
ReactDOM.render(<div>
  <dialog con="666" />
  <dialog con='嘿嘿嘿' lx={2}>
    {/**属性值不是字符串我们需要使用大括号包起来 */}
  </dialog>
</div>,root)