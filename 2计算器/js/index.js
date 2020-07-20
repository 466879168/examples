window.onload=function  () {
  Calculator.initCache()
  Calculator.initListeners()
}

//全局对象
const Calculator=(function  () {
  let cal={
    //计算器的按键编码
    keyCodes:{
      0: '0',1: '1',2: '2',3: '3',4: '4',5: '5',6: '6',7: '7',8: '8',9: '9',10: '.',11: '±',12: '=',13: '+',14: '-',15: '*',16: '/',17: '%',18: '√',19: 'x2',20: '1/x',21: '(',22: ')',23: 'yroot',24: 'n!',25: 'Exp',26: '^',27: 'sin',28: 'cos',29: 'tan',30: 'powten',31: 'log',32: 'sinh',33: 'cosh',34: 'tanh',35: 'π',36: '↑',37: 'CE',38: 'C',39: 'Back',
      //以下是程序员型特有的按键
40: 'A',41: 'B',42: 'C',43: 'D',44: 'E',45: 'F',46: '&',47: '|',48: '~'
    },
    //结果栏显示的操作符，计算的时候用*显示的时候用x
    operatorFacade: {
      13: '+',14: '-',15: '×',16: '÷',17: '%',23: 'yroot',26: '^',46: '&',47: '|'
    },
    //当前计算器的类型 默认为标准型
    typePrefix:{
      1: "std-",
      2: "sci-",
      3: "pro-"
    },
    

  }
})()