由于React团队已经声明React.createClass最终会被React.Component的类形式所取代。

但是在找到Mixins替代方案之前是不会废弃掉React.createClass形式。


所以：

能用React.Component创建的组件的就尽量不用React.createClass形式创建组件。

除此之外，创建组件的形式选择还应该根据下面来决定：

1、只要有可能，尽量使用无状态组件创建形式。

2、否则（如需要state、生命周期方法等），使用`React.Component`这种es6形式创建组件