import React from 'react';



//React.createElement方法创建并返回一个给定类型的ReactElement元素。
//type参数可以是一个html标签名称字符串，也可以是一个ReactClasss。这个type参数对于createElement来说是必须的。
//第二个参数是该标签的属性，这个参数是可选的。
//第三个参数是该元素的子节点，同样也是可选的。

var p = React.createElement(
		"h1",
		null,
		"I am createElement!"
	);


//React.createElement('div', {}, 'Hello, world!'), 
//Element 是后文 Class 的实例
//React 通过解析每一个创建的 Element， 计算出需要对 DOM 进行的实际操作来完成渲染的。
//代码中的 React.createElement 创建了一个新的 div Componnet 的实例。第一个参数 “div”是 React 预先定义好的。
//第二个参数{} 是需要传入的 props，第三个参数是 "Child Element"。
//当你创建了第一个 Element，其所有的“孩子”都会被自动创建。
//用 “Element” 来命名，应该是遵从了 HTML Elements 的习惯。

export default p;