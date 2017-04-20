import React from 'react';
import ReactDom from 'react-dom';
//在新版本中react和react-deom是分开的，根据官网的说法是为react-native铺平道路
// var React = require('react')   


import CreateElement from './createElement.js'
import CreateClass from './createClass.js'



ReactDom.render(
		<div>
		{CreateElement}
		<br/>
		<CreateClass></CreateClass>
		</div>,

		document.getElementById("app")
)