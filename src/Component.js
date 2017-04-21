
import React, { PropTypes, Component }from 'react';




class CreateComponent extends React.Component {
    // static propTypes = {//类的静态属性
    //     name: React.PropTypes.string
    // };

    // static defaultProps = {//类的静态属性
    //     name: '我是初始化的props'
    // };
    
    constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder'
        };

        // ES6 类中函数必须手动绑定
        //有三种绑定方式
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Component : {this.state.text}{`aaaaaa${this.props.value}dsafsadfsadf`}</h1>
                <input onChange={this.handleChange} />
            </div>
        );
    }
}
Component.propTypes = {
    initialValue: React.PropTypes.string
};
Component.defaultProps = {
    initialValue: '1111'
};

export default CreateComponent;

/*

上面代码首先用class定义了一个“类”，
可以看到里面有一个constructor方法，这就是构造方法
而this关键字则代表实例对象。
简单地说，constructor内定义的方法和属性是实例对象自己的，
而constructor外定义的方法和属性则是所有实例对象可以共享的。

super关键字，它指代父类的实例（即父类的this对象）。
子类必须在constructor方法中调用super方法，否则新建实例时会报错。
这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
如果不调用super方法，子类就得不到this对象

*/