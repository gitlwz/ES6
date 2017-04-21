import React from 'react';
import ReactDom from 'react-dom';


var CreateClass = React.createClass({
    //设置 initial props
    propTypes: { // as an object
        name: React.PropTypes.string
    },
    getDefaultProps:function(){   // return a object
        return {
            name: '我是初始化的props'    
        }
    },

    // 设置 initial state
    getInitialState: function() {//组件相关的状态对象
        return {
            text: this.props.initialValue || 'placeholder'
        };
    },
    handleChange: function(event) {
        this.setState({ //this represents react component instance
            text: event.target.value
        });
    },
    render: function() {
        return (
            <div>

                <h1>CreateClass:{this.state.text}{this.props.value}</h1>
                <h2>{this.props.name}</h2>
                <input onChange={this.handleChange}  />
            </div>
        );
    }
});


/*
`React.createClass`是react刚开始推荐的创建组件的方式，这是ES5的原生的JavaScript来实现的React组件.
与无状态组件相比
React.createClass和React.Component都是创建有状态的组件，这些组件是要被实例化的，
并且可以访问组件的生命周期方法。但是随着React的发展，React.createClass形式自身的问题暴露出来

1:React.createClass会自绑定函数方法（不像React.Component只绑定需要关心的函数）导致不必要的性能开销，增加代码过时的可能性

2:React.createClass的mixins不够自然、直观；

*/


export default CreateClass;