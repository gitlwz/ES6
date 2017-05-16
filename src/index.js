
//ES6的最新常用特性介绍：https://segmentfault.com/a/1190000004365693#articleHeader4



import React from 'react';
import ReactDom from 'react-dom';
//在新版本中react和react-deom是分开的，根据官网的说法是为react-native铺平道路
// var React = require('react')   


import CreateElement from './createElement.js'
import CreateClass from './createClass.js'
import Stateless from './stateless.js'
import Component from './Component.js'



ReactDom.render(
		<div>
			{CreateElement}
		
			<CreateClass></CreateClass>
			
			<Stateless></Stateless>
			
			<Component></Component>
		

		</div>,
		
		document.getElementById("app")
)